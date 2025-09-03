import React, { useState, useCallback } from 'react';
import Plot from 'react-plotly.js';

// Ant Design Components
import { 
  Layout, 
  Button, 
  Typography, 
  Input, 
  Card, 
  Row, 
  Col, 
  Spin, 
  Alert,
  Space,
  Switch,
  Table,
  Tabs,
  Divider,
  Descriptions
} from 'antd';
import { UploadOutlined, DownloadOutlined, ExperimentOutlined, CheckCircleOutlined } from '@ant-design/icons';

// Custom Components
import InfoBlock from './InfoBlock';
import Footer from './Footer';

const { Header, Content } = Layout;
const { Title, Text } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;

function Predictor({ onBack }) {
  // --- State --- //
  const [mode, setMode] = useState('predict'); // 'predict' atau 'validate'
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('Silakan pilih atau seret file .asc ke sini.');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [plotData, setPlotData] = useState([]);
  const [plotLayout, setPlotLayout] = useState({
    title: 'Hasil Akan Tampil di Sini',
    template: 'plotly_white',
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: '#333' },
    xaxis: { title: 'Panjang Gelombang (nm)', gridcolor: '#e2e8f0' },
    yaxis: { title: 'Intensitas', gridcolor: '#e2e8f0' },
    hovermode: 'x unified',
    legend: { x: 1, xanchor: 'right', y: 1 }
  });
  const [rawFileContent, setRawFileContent] = useState('');
  
  // --- Input State (Shared) --- //
  const [prominenceInput, setProminenceInput] = useState('0.0001');
  const [distanceInput, setDistanceInput] = useState('1');
  const [heightInput, setHeightInput] = useState('');
  const [widthInput, setWidthInput] = useState('');
  const [applyBaselineCorrection, setApplyBaselineCorrection] = useState(false);
  const [lam, setLam] = useState('100000');
  const [p, setP] = useState('0.01');
  const [niter, setNiter] = useState('10');

  // --- Validation-specific State --- //
  const [groundTruthInput, setGroundTruthInput] = useState('');
  const [validationTableData, setValidationTableData] = useState([]);
  const [summaryData, setSummaryData] = useState(null);
  const [lastRequestData, setLastRequestData] = useState(null);

  // --- Handlers --- //
  const parseAscContent = (content) => {
    const lines = content.split('\n');
    const data = lines.map(line => line.trim().split(/\s+/).map(parseFloat)).filter(parts => parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1]));
    return { wavelengths: data.map(d => d[0]), intensities: data.map(d => d[1]) };
  };

  const handleFileChange = useCallback(async (selectedFile) => {
    if (!selectedFile || !selectedFile.name.endsWith('.asc')) {
      setError('Error: Hanya file dengan format .asc yang diterima.');
      setFile(null);
      return;
    }
    setFile(selectedFile);
    setStatus(`File terpilih: ${selectedFile.name}`);
    setError(null);
    setIsLoading(true);
    // Reset all previous results
    setPlotData([]);
    setValidationTableData([]);
    setSummaryData(null);
    setLastRequestData(null);
    try {
      const content = await selectedFile.text();
      setRawFileContent(content);
      const { wavelengths, intensities } = parseAscContent(content);
      if (wavelengths.length > 0) {
        setPlotData([{ x: wavelengths, y: intensities, mode: 'lines', name: 'Sinyal Mentah', line: { color: '#4a5568' } }]);
        setPlotLayout(prev => ({ ...prev, title: `Pratinjau Sinyal: ${selectedFile.name}`, annotations: [] }));
        setStatus('File berhasil diunggah. Pratinjau sinyal ditampilkan.');
      } else {
        setError('File .asc tidak mengandung data yang valid.');
      }
    } catch (err) { setError(`Gagal membaca file: ${err.message}`); } 
    finally { setIsLoading(false); }
  }, []);

  const onDragOver = useCallback((e) => e.preventDefault(), []);
  const onDrop = useCallback((e) => { e.preventDefault(); e.dataTransfer.files && e.dataTransfer.files.length > 0 && handleFileChange(e.dataTransfer.files[0]); }, [handleFileChange]);

  // Helper function to avoid duplicating request body creation
  const getSharedRequestBody = () => ({
    asc_content: rawFileContent,
    prominence: prominenceInput === '' ? null : Number(prominenceInput),
    distance: distanceInput === '' ? null : Number(distanceInput),
    height: heightInput === '' ? null : Number(heightInput),
    width: widthInput === '' ? null : Number(widthInput),
    apply_baseline_correction: applyBaselineCorrection,
    ...(applyBaselineCorrection && { lam: parseFloat(lam), p: parseFloat(p), niter: parseInt(niter, 10) })
  });

  // --- Original Feature: Quick Prediction ---
  const handlePredict = async () => {
    if (!rawFileContent) { setError('Silakan pilih file terlebih dahulu.'); return; }
    
    setIsLoading(true);
    setStatus('Memproses file...');
    setError(null);
    setValidationTableData([]);
    setSummaryData(null);
    
    try {
      const baseUrl = import.meta.env.VITE_API_URL;
      const requestBody = getSharedRequestBody();
      
      const response = await fetch(`${baseUrl}/predict_with_prominence`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      const results = await response.json();
      if (!response.ok) throw new Error(results.detail || 'Server error');

      const newPlotData = [];
      newPlotData.push({ x: results.wavelengths, y: results.spectrum_data, mode: 'lines', name: 'Processed Spectrum', line: { color: '#2d3748' } });
      if (results.peak_wavelengths?.length > 0) {
        newPlotData.push({ x: results.peak_wavelengths, y: results.peak_intensities, mode: 'markers', name: 'Puncak Terdeteksi', marker: { color: '#38a169', size: 8 } });
      }
      setPlotData(newPlotData);
      setPlotLayout(prev => ({ ...prev, title: `Hasil Analisis untuk: ${file.name}`, annotations: results.annotations || [] }));
      setStatus('Analisis berhasil!');
    } catch (err) { setError(err.message); } 
    finally { setIsLoading(false); }
  };

  // --- New Feature: Validation ---
  const handleValidate = async () => {
    if (!rawFileContent || !groundTruthInput) { setError('Harap isi file .asc dan Ground Truth Elements.'); return; }
    
    setIsLoading(true);
    setStatus('Memvalidasi...');
    setError(null);
    setValidationTableData([]);
    setSummaryData(null);

    const ground_truth_elements = groundTruthInput.split(',').map(item => item.trim()).filter(Boolean);
    const requestBody = { ...getSharedRequestBody(), ground_truth_elements };
    
    setLastRequestData(requestBody); // Save for download

    try {
      const baseUrl = import.meta.env.VITE_API_URL;
      const response = await fetch(`${baseUrl}/validate`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody)
      });
      const results = await response.json();
      if (!response.ok) throw new Error(results.detail || 'Server error');
      
      const newPlotData = [];
      newPlotData.push({ x: results.wavelengths, y: results.spectrum_data, mode: 'lines', name: 'Processed Spectrum', line: { color: '#2d3748' } });
      if (results.peak_wavelengths?.length > 0) {
        newPlotData.push({ x: results.peak_wavelengths, y: results.peak_intensities, mode: 'markers', name: 'Puncak Terdeteksi', marker: { color: '#38a169', size: 8 } });
      }
      setPlotData(newPlotData);
      setPlotLayout(prev => ({ ...prev, title: `Hasil Analisis untuk: ${file.name}`, annotations: results.annotations || [] }));
      
      setValidationTableData(results.validation_table);
      setSummaryData(results.summary_metrics);

      setStatus('Validasi berhasil!');
    } catch (err) { setError(err.message); } 
    finally { setIsLoading(false); }
  };

  const handleDownload = async () => {
    if (!lastRequestData) { alert("Harap lakukan validasi terlebih dahulu."); return; }
    
    setIsLoading(true);
    setStatus('Menyiapkan file Excel...');
    setError(null);

    try {
        const baseUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${baseUrl}/download_excel`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(lastRequestData)
        });
        if (!response.ok) throw new Error('Gagal mengunduh file dari server.');
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'laporan_validasi_lengkap.xlsx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
        setStatus('File berhasil diunduh.');
    } catch (err) {
        setError(err.message);
    } finally {
        setIsLoading(false);
    }
  };
  
  // << BARU >> Definisi kolom tabel diperbarui
  const validationTableColumns = [
    { title: 'Elemen', dataIndex: 'Elemen', key: 'Elemen', width: '15%' },
    { title: 'Status Prediksi', dataIndex: 'Status Prediksi', key: 'Status Prediksi', width: '25%' },
    { title: 'Jumlah Puncak', dataIndex: 'Jumlah Puncak', key: 'Jumlah Puncak', width: '20%' },
    { title: 'Lokasi Puncak (nm)', dataIndex: 'Lokasi Puncak (nm)', key: 'Lokasi Puncak (nm)' },
  ];

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <Header style={{ background: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #f0f0f0', justifyContent: 'space-between' }}>
        <Title level={3} style={{ margin: 0 }}>Spectroscopy Dashboard</Title>
        <Button 
          type="primary" 
          onClick={onBack}
          style={{ 
            backgroundColor: '#722ed1', 
            borderColor: '#722ed1' 
          }}
        >
          Back to Portfolio
        </Button>
      </Header>
      <Content style={{ padding: '24px' }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} lg={8}>
            <Card title="Kontrol Analisis" style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.09)' }}>
              <div style={{ border: '2px dashed #d9d9d9', padding: '24px', textAlign: 'center', borderRadius: '8px', marginBottom: 16, cursor: 'pointer', backgroundColor: '#fafafa' }} onDragOver={onDragOver} onDrop={onDrop}>
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                    <UploadOutlined style={{ fontSize: '40px', color: '#929292' }} />
                    <input type="file" onChange={(e) => handleFileChange(e.target.files[0])} accept=".asc" style={{ display: 'none' }} id="file-upload" />
                    <Button type="default" onClick={() => document.getElementById('file-upload').click()}>{file ? 'Ganti File' : 'Pilih File'}</Button>
                    <Text type="secondary">{status}</Text>
                </Space>
              </div>
              {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 16 }} />}

              <Tabs activeKey={mode} onChange={(key) => { setMode(key); setValidationTableData([]); setSummaryData(null); }} centered>
                <TabPane tab={<Space><ExperimentOutlined />Prediksi Cepat</Space>} key="predict">
                  <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 16 }}>
                    Mode ini akan langsung memprediksi elemen dari spektrum yang Anda unggah.
                  </Text>
                  <Button type="primary" onClick={handlePredict} disabled={isLoading || !file} block style={{ height: 40, fontWeight: 'bold' }}>
                    {isLoading ? <Spin /> : 'Prediksi Elemen'}
                  </Button>
                </TabPane>
                <TabPane tab={<Space><CheckCircleOutlined />Validasi Model</Space>} key="validate">
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Text>Ground Truth Elements</Text>
                    <TextArea value={groundTruthInput} onChange={(e) => setGroundTruthInput(e.target.value)} placeholder="Contoh: Fe, Si, Mg" rows={2} disabled={isLoading} />
                    <Button type="primary" onClick={handleValidate} disabled={isLoading || !file} block style={{ height: 40, fontWeight: 'bold' }}>
                      {isLoading ? <Spin /> : 'Jalankan Validasi'}
                    </Button>
                    <Button icon={<DownloadOutlined />} onClick={handleDownload} disabled={isLoading || validationTableData.length === 0} block>
                      Download Hasil (.xlsx)
                    </Button>
                  </Space>
                </TabPane>
              </Tabs>
              
              <Divider>Parameter Opsional</Divider>
              <Space direction="vertical" style={{width: '100%'}}>
                <Card size="small" title="Parameter Deteksi Puncak" style={{ border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                    <Space direction="vertical" style={{width: '100%'}}>
                        <Input addonBefore="Prominence" value={prominenceInput} onChange={e=>setProminenceInput(e.target.value)} placeholder="Contoh: 0.01"/>
                        <Input addonBefore="Distance" value={distanceInput} onChange={e=>setDistanceInput(e.target.value)} placeholder="Contoh: 8"/>
                        <Input addonBefore="Height" value={heightInput} onChange={e=>setHeightInput(e.target.value)} placeholder="Opsional"/>
                        <Input addonBefore="Width" value={widthInput} onChange={e=>setWidthInput(e.target.value)} placeholder="Opsional"/>
                    </Space>
                </Card>
                <Card size="small" title="Koreksi Baseline (ALS)" style={{ border: '1px solid #e0e0e0', borderRadius: '8px', marginTop: 16 }}>
                    <Space style={{marginBottom: 8}}><Switch checked={applyBaselineCorrection} onChange={setApplyBaselineCorrection}/><Text>Aktifkan Koreksi</Text></Space>
                    <Row gutter={8}>
                        <Col span={8}><Input addonBefore="Lam" value={lam} onChange={e=>setLam(e.target.value)} placeholder="1e5" disabled={!applyBaselineCorrection}/></Col>
                        <Col span={8}><Input addonBefore="p" value={p} onChange={e=>setP(e.target.value)} placeholder="0.01" disabled={!applyBaselineCorrection}/></Col>
                        <Col span={8}><Input addonBefore="niter" value={niter} onChange={e=>setNiter(e.target.value)} placeholder="10" disabled={!applyBaselineCorrection}/></Col>
                    </Row>
                </Card>
              </Space>
            </Card>
          </Col>
          <Col xs={24} lg={16}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <Card title="Hasil Interpretasi Grafik" style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.09)' }}>
                <div style={{ width: '100%', height: '450px', position: 'relative' }}>
                  <Plot data={plotData} layout={plotLayout} useResizeHandler={true} style={{ width: '100%', height: '100%' }} config={{ responsive: true }}/>
                  {isLoading && <Spin spinning={true} size="large" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}/>}
                </div>
              </Card>
              
              {validationTableData.length > 0 && mode === 'validate' && (
                <Card title="Tabel Hasil Validasi" style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.09)' }}>
                  <Table columns={validationTableColumns} dataSource={validationTableData} pagination={false} rowKey="Elemen" size="small" />
                </Card>
              )}

              {summaryData && mode === 'validate' && (
                <Card title="Ringkasan Kuantitatif" style={{ borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.09)' }}>
                  <Descriptions bordered size="small" column={1} layout="horizontal">
                    <Descriptions.Item labelStyle={{fontWeight: 'bold'}} label="Precision">{summaryData.Precision}</Descriptions.Item>
                    <Descriptions.Item labelStyle={{fontWeight: 'bold'}} label="Recall">{summaryData.Recall}</Descriptions.Item>
                    <Descriptions.Item labelStyle={{fontWeight: 'bold'}} label="F1-Score">{summaryData['F1-Score']}</Descriptions.Item>
                    <Descriptions.Item labelStyle={{fontWeight: 'bold'}} label="True Positives (TP)">{summaryData['True Positives (TP)']}</Descriptions.Item>
                    <Descriptions.Item labelStyle={{fontWeight: 'bold'}} label="False Positives (FP)">{summaryData['False Positives (FP)']}</Descriptions.Item>
                    <Descriptions.Item labelStyle={{fontWeight: 'bold'}} label="False Negatives (FN)">{summaryData['False Negatives (FN)']}</Descriptions.Item>
                  </Descriptions>
                </Card>
              )}
            </Space>
          </Col>
        </Row>
      </Content>
      <InfoBlock />
      <Footer />
    </Layout>
  );
}

export default Predictor;