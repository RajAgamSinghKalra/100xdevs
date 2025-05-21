#!/bin/bash
cd /d/the_code/syncit/cohort
git add --all
git commit -m "Auto-commit on change at $(date)"
git push origin main
