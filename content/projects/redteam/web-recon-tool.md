---
title: "Automated Web Recon Tool (Planned)"
date: 2026-02-15
draft: true
summary: "A recon automation tool that chains enumeration → scanning → evidence capture, built as a recruiter-friendly case study." 
tags: ["recon", "nmap", "automation"]
github: "https://github.com/Kamogelo-Bathebeng"
---

## Problem
Recon is repetitive. The goal is to automate the repeatable pieces while keeping outputs readable.

## Scope
- Input: target domain
- Output: subdomains, ports/services, HTTP screenshots, quick vuln checks

## Planned architecture
- Orchestrator script
- Modules: enum, scan, http, reporting

## Next steps
- Build MVP with safe defaults
- Add logging + report folder structure
