# On-Call Roles and Responsibilities

## Overview
This document outlines the on-call rotation system, roles, responsibilities, and procedures for our team to ensure continuous support and quick issue resolution.

## Rotation Schedule

### Weekly Rotation System
- **Duration**: Monday to Monday (aligned with sprint cycle)
- **Rotation Pattern**: 
  - Week 1: Person 1 (Primary), Person 2 (Backup)
  - Week 2: Person 2 (Primary), Person 3 (Backup)
  - Week 3: Person 3 (Primary), Person 1 (Backup)
  - *Cycle continues...*

### Primary and Backup Structure
- **Primary Member**: Main point of contact for all issues during their assigned week
- **Backup Member**: Steps in when primary member is unavailable
- **Handover Communication**: Primary member must proactively communicate with backup member when they will be unavailable (specific day/time)

### Sprint Board Management
- Primary member maintains an "On Call" card on the sprint board
- All issues occurred and resolved during the week are added to this card
- Card serves as a record of on-call activities and resolutions

## Core Responsibilities

### 1. Communication Management
- **Primary responsibility**: Handle all crisp chat communications and email support
- **Response Standards**: 
  - Working hours: 15-30 minutes maximum response time
  - Non-working hours: 30 minutes to 1 hour maximum (while awake)
  - After-hours issues: Acknowledge first thing the next morning

### 2. Issue Prioritizing and Resolution
- **Priority Assessment**: Evaluate and categorize incoming issues by priority level
- **Resolution Strategy**: 
  - Resolve issues directly if within scope and time permits
  - Assign to appropriate team members if outside expertise area or time-intensive
  - Document all actions taken on the sprint board card

### 3. Availability Requirements
- **Working Hours**: Full availability with quick response times
- **Non-Working Hours**: Best effort response while awake
- **Communication Protocol**: Primary member must inform backup member in advance when they will be unavailable
- **Handover Responsibility**: Primary member is responsible for ensuring backup member is aware and ready to take over

## Daily Review Guidelines

### 1. Security Monitoring
- **Phishing Detection**: Check for and investigate any phishing job notifications
- **Spam Detection**: Review all new user signups and identify potential spam accounts based on patterns and behaviors
- **Spam Account Management**: Take immediate action on obvious spam accounts - ban spam accounts that have active subscriptions and process refunds for banned spam accounts

### 2. Sentry Error Monitoring
- **Error Review**: Check Sentry for new errors and issues
- **Impact Assessment**: Evaluate the effect and prioritize issues based on severity
- **Resolution Strategy**: 
  - Resolve minor issues directly
  - For major issues, assign to the code owner and ensure resolution tracking
- **Documentation**: Record all Sentry issues and actions taken on the sprint card

### 3. User Registration Review
**Daily signup verification process:**

#### 3.1 Paid Plan Verification
- For users on paid plans, verify subscription status and validity

#### 3.2 Usage Analysis
- Monitor if paid subscribers are actively using the application
- Mail accounts with subscriptions but no meaningful activity (refer email template from sales channel pinned messages)

### 4. Suspicious Account Follow-up
- **Email Verification**: Contact doubtful accounts for clarification
- **Template Usage**: Use email template from sales channel pinned messages
- **Response Deadline**: Set reasonable timeframe for user response
- **Non-Response Protocol**: Ban accounts that don't respond within specified timeframe

### 5. Custom Domain Management
- **Slack Notifications**: Monitor for any custom domain notifications on Slack
- **AWS S3 Configuration**: When new custom domain requests come in:
  1. Navigate to: https://ap-south-1.console.aws.amazon.com/s3/buckets/formester?region=ap-south-1&tab=permissions&bucketType=general
  2. Under **Cross-origin resource sharing (CORS)** section
  3. Click Edit and add the new domain URL to AllowedOrigins
- **reCAPTCHA Configuration**: 
  1. Go to: https://www.google.com/recaptcha/admin/site/505599585/settings (Formester Production V2 and Formester Production Spam Score)
  2. Add the new domain to the domains list


## VirusTotal Domain Monitoring

### Daily Domain Check Process
1. **Navigate to**: https://www.virustotal.com/
2. **Search Domains**: 
   - formester
   - app.formester
3. **Blacklist Monitoring**: Check if any security providers have blacklisted the domains
4. **Resolution Process**: 
   - If blacklisted, obtain contact details from: https://docs.virustotal.com/docs/false-positive-contacts
   - Contact the provider to request removal from blacklist
   - Follow up until domain is cleared

## Escalation Procedures

### Internal Escalation
1. **Primary to Backup**: Primary member must communicate unavailability to backup member before stepping away
2. **Technical Escalation**: Primary member routes complex technical issues to appropriate specialists if it takes more time to fix and ensures proper handover
3. **Management Escalation**: Primary member involves leadership for critical issues or policy/business decisions and communicates escalation details

### External Communication
- **Customer Updates**: Keep customers informed of issue status and resolution timeline
- **Documentation**: Maintain detailed records of all escalations and resolutions on the sprint board card


### Handover Process
- **Weekly Transition**: Brief incoming primary member on ongoing issues
- **Documentation & Review**: Ensure all activities are properly documented
- **Outstanding Issues**: Transfer ownership of unresolved items
