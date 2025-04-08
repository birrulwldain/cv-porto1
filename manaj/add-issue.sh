#!/bin/bash

REPO="birrulwldain/cv-porto1"
PROJECT_NUMBER=5
OWNER="@me"
USERNAME=$(gh api user --jq .login)  # Mendapatkan username kamu dari GitHub CLI

while read -r issue_number; do
  ISSUE_URL="https://github.com/$REPO/issues/$issue_number"
  echo "📌 Menambahkan issue #$issue_number ke project..."
  gh project item-add $PROJECT_NUMBER --owner $OWNER --url $ISSUE_URL

  echo "👤 Meng-assign issue #$issue_number ke $USERNAME..."
  gh issue edit $issue_number --repo $REPO --add-assignee "$USERNAME"
done < issue_numbers.txt
