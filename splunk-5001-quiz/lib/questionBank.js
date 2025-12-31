// 150 original practice questions aligned to the public blueprint topics.
export const LAST_UPDATED = "2025-08-06";
export const QUESTION_BANK = [
  {
    "id": "SPLK5001-001",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "In a typical SOC, which role is primarily responsible for building and maintaining detections and data pipelines so analysts can investigate effectively?",
    "options": [
      "Analyst",
      "Engineer",
      "Architect",
      "Compliance officer"
    ],
    "answerIndex": 1,
    "explanation": "SOC engineers focus on implementing and maintaining security tooling, data onboarding, and detections that enable analysts’ work.",
    "discussion": "Architects design the overall program and long-term architecture; analysts triage/investigate; engineers operationalize the tooling and content.",
    "tags": [
      "soc",
      "roles"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-02",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-002",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "Which CIA element is most directly impacted by an attacker modifying log data to hide their tracks?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authentication"
    ],
    "answerIndex": 1,
    "explanation": "Integrity is about ensuring data is accurate and unaltered; tampering with logs is an integrity violation.",
    "discussion": "Authentication supports CIA but is not one of the triad elements.",
    "tags": [
      "cia",
      "risk"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-03",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-003",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "Which framework is most commonly used to describe adversary tactics and techniques in a structured, defensive mapping?",
    "options": [
      "OWASP Top 10",
      "MITRE ATT&CK",
      "ITIL",
      "COBIT"
    ],
    "answerIndex": 1,
    "explanation": "MITRE ATT&CK catalogs adversary tactics and techniques and is widely used for detection mapping and threat hunting.",
    "discussion": "OWASP focuses on web app risks; ITIL/COBIT are service governance frameworks.",
    "tags": [
      "frameworks",
      "mitre"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-04",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-004",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "A risk register is best described as:",
    "options": [
      "A list of SOC alerts pending triage",
      "A catalog of identified risks with owners and treatment plans",
      "A Splunk index configuration file",
      "A vulnerability scan report"
    ],
    "answerIndex": 1,
    "explanation": "A risk register tracks risks, their likelihood/impact, owners, and mitigation or acceptance decisions.",
    "discussion": "Vulnerability reports can feed the register, but the register is a management artifact.",
    "tags": [
      "risk",
      "governance"
    ],
    "difficulty": "medium",
    "createdAt": "2025-01-05",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-005",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "In information assurance, 'least privilege' is primarily a control to reduce risk to:",
    "options": [
      "Availability",
      "Confidentiality and Integrity",
      "Brand reputation",
      "Physical safety only"
    ],
    "answerIndex": 1,
    "explanation": "Least privilege limits who can access or modify data, protecting confidentiality and integrity.",
    "discussion": "It can indirectly help availability, but its main intent is preventing unauthorized access/changes.",
    "tags": [
      "controls",
      "access"
    ],
    "difficulty": "medium",
    "createdAt": "2025-01-06",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-006",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "In a typical SOC, which role is primarily responsible for building and maintaining detections and data pipelines so analysts can investigate effectively?",
    "options": [
      "Analyst",
      "Engineer",
      "Architect",
      "Compliance officer"
    ],
    "answerIndex": 1,
    "explanation": "SOC engineers focus on implementing and maintaining security tooling, data onboarding, and detections that enable analysts’ work.",
    "discussion": "Architects design the overall program and long-term architecture; analysts triage/investigate; engineers operationalize the tooling and content.",
    "tags": [
      "soc",
      "roles"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-07",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-007",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "Which CIA element is most directly impacted by an attacker modifying log data to hide their tracks?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authentication"
    ],
    "answerIndex": 1,
    "explanation": "Integrity is about ensuring data is accurate and unaltered; tampering with logs is an integrity violation.",
    "discussion": "Authentication supports CIA but is not one of the triad elements.",
    "tags": [
      "cia",
      "risk"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-08",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-008",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "Which framework is most commonly used to describe adversary tactics and techniques in a structured, defensive mapping?",
    "options": [
      "OWASP Top 10",
      "MITRE ATT&CK",
      "ITIL",
      "COBIT"
    ],
    "answerIndex": 1,
    "explanation": "MITRE ATT&CK catalogs adversary tactics and techniques and is widely used for detection mapping and threat hunting.",
    "discussion": "OWASP focuses on web app risks; ITIL/COBIT are service governance frameworks.",
    "tags": [
      "frameworks",
      "mitre"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-09",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-009",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "A risk register is best described as:",
    "options": [
      "A list of SOC alerts pending triage",
      "A catalog of identified risks with owners and treatment plans",
      "A Splunk index configuration file",
      "A vulnerability scan report"
    ],
    "answerIndex": 1,
    "explanation": "A risk register tracks risks, their likelihood/impact, owners, and mitigation or acceptance decisions.",
    "discussion": "Vulnerability reports can feed the register, but the register is a management artifact.",
    "tags": [
      "risk",
      "governance"
    ],
    "difficulty": "medium",
    "createdAt": "2025-01-10",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-010",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "In information assurance, 'least privilege' is primarily a control to reduce risk to:",
    "options": [
      "Availability",
      "Confidentiality and Integrity",
      "Brand reputation",
      "Physical safety only"
    ],
    "answerIndex": 1,
    "explanation": "Least privilege limits who can access or modify data, protecting confidentiality and integrity.",
    "discussion": "It can indirectly help availability, but its main intent is preventing unauthorized access/changes.",
    "tags": [
      "controls",
      "access"
    ],
    "difficulty": "medium",
    "createdAt": "2025-01-11",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-011",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "In a typical SOC, which role is primarily responsible for building and maintaining detections and data pipelines so analysts can investigate effectively?",
    "options": [
      "Analyst",
      "Engineer",
      "Architect",
      "Compliance officer"
    ],
    "answerIndex": 1,
    "explanation": "SOC engineers focus on implementing and maintaining security tooling, data onboarding, and detections that enable analysts’ work.",
    "discussion": "Architects design the overall program and long-term architecture; analysts triage/investigate; engineers operationalize the tooling and content.",
    "tags": [
      "soc",
      "roles"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-12",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-012",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "Which CIA element is most directly impacted by an attacker modifying log data to hide their tracks?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Authentication"
    ],
    "answerIndex": 1,
    "explanation": "Integrity is about ensuring data is accurate and unaltered; tampering with logs is an integrity violation.",
    "discussion": "Authentication supports CIA but is not one of the triad elements.",
    "tags": [
      "cia",
      "risk"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-13",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-013",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "Which framework is most commonly used to describe adversary tactics and techniques in a structured, defensive mapping?",
    "options": [
      "OWASP Top 10",
      "MITRE ATT&CK",
      "ITIL",
      "COBIT"
    ],
    "answerIndex": 1,
    "explanation": "MITRE ATT&CK catalogs adversary tactics and techniques and is widely used for detection mapping and threat hunting.",
    "discussion": "OWASP focuses on web app risks; ITIL/COBIT are service governance frameworks.",
    "tags": [
      "frameworks",
      "mitre"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-14",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-014",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "A risk register is best described as:",
    "options": [
      "A list of SOC alerts pending triage",
      "A catalog of identified risks with owners and treatment plans",
      "A Splunk index configuration file",
      "A vulnerability scan report"
    ],
    "answerIndex": 1,
    "explanation": "A risk register tracks risks, their likelihood/impact, owners, and mitigation or acceptance decisions.",
    "discussion": "Vulnerability reports can feed the register, but the register is a management artifact.",
    "tags": [
      "risk",
      "governance"
    ],
    "difficulty": "medium",
    "createdAt": "2025-01-15",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-015",
    "domain": "1.0 Cyber Landscape, Frameworks, and Standards",
    "question": "In information assurance, 'least privilege' is primarily a control to reduce risk to:",
    "options": [
      "Availability",
      "Confidentiality and Integrity",
      "Brand reputation",
      "Physical safety only"
    ],
    "answerIndex": 1,
    "explanation": "Least privilege limits who can access or modify data, protecting confidentiality and integrity.",
    "discussion": "It can indirectly help availability, but its main intent is preventing unauthorized access/changes.",
    "tags": [
      "controls",
      "access"
    ],
    "difficulty": "medium",
    "createdAt": "2025-01-16",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-016",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Which scenario best fits 'command and control (C2)' activity?",
    "options": [
      "A user resets a forgotten password",
      "A compromised host beacons to an external server for instructions",
      "A firewall blocks inbound SSH",
      "A backup job copies files to cold storage"
    ],
    "answerIndex": 1,
    "explanation": "C2 is the communication channel used by malware/attackers to receive commands and exfiltrate results.",
    "discussion": "Benign admin and backup traffic can look similar; context and indicators help distinguish.",
    "tags": [
      "c2",
      "malware"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-17",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-017",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "What differentiates a DDoS from a DoS attack?",
    "options": [
      "DDoS always targets DNS",
      "DDoS uses multiple sources to overwhelm a target",
      "DoS requires malware",
      "DoS only affects web servers"
    ],
    "answerIndex": 1,
    "explanation": "Distributed denial of service leverages many systems (often a botnet) to flood a target.",
    "discussion": "Any service can be targeted; both can be volumetric or application-layer.",
    "tags": [
      "dos",
      "ddos",
      "botnet"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-18",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-018",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "A 'supply chain attack' most directly means:",
    "options": [
      "Stealing credit cards from an e‑commerce site",
      "Compromising a vendor or update mechanism to reach downstream victims",
      "Password spraying against O365",
      "Phishing a CEO"
    ],
    "answerIndex": 1,
    "explanation": "Supply chain attacks exploit trusted third parties (vendors, libraries, updates) to compromise multiple customers.",
    "discussion": "It’s about abusing trust relationships, not a specific target type.",
    "tags": [
      "supply-chain",
      "third-party"
    ],
    "difficulty": "medium",
    "createdAt": "2025-01-19",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-019",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Ransomware typically combines which two goals?",
    "options": [
      "Persistence and stealth only",
      "Data encryption for extortion, often plus data theft for double extortion",
      "Cryptomining and DDoS only",
      "Privilege reduction and logging"
    ],
    "answerIndex": 1,
    "explanation": "Modern ransomware encrypts systems and often exfiltrates data to pressure victims to pay.",
    "discussion": "Not all campaigns steal data, but it’s common enough to be testable.",
    "tags": [
      "ransomware",
      "exfiltration"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-20",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-020",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Which is an example of 'social engineering'?",
    "options": [
      "SQL injection in a web form",
      "Convincing an employee to share an MFA code",
      "Using tstats for acceleration",
      "Patching a vulnerable library"
    ],
    "answerIndex": 1,
    "explanation": "Social engineering manipulates people rather than exploiting a purely technical vulnerability.",
    "discussion": "Phishing, vishing, and pretexting are classic forms.",
    "tags": [
      "social-engineering",
      "phishing"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-21",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-021",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "An 'APT' is best described as:",
    "options": [
      "Any malware written in Python",
      "A threat actor characterized by long-term, targeted, and well-resourced operations",
      "A vulnerability scanner",
      "A cloud security posture tool"
    ],
    "answerIndex": 1,
    "explanation": "APT commonly refers to sophisticated adversaries conducting persistent campaigns against specific targets.",
    "discussion": "The exact label is debated, but the exam expects the conventional definition.",
    "tags": [
      "apt",
      "threat-actor"
    ],
    "difficulty": "medium",
    "createdAt": "2025-01-22",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-022",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Zero Trust is primarily a model that assumes:",
    "options": [
      "Internal networks are always safe",
      "Trust is granted once per device",
      "No implicit trust; continuously verify identity, device, and context",
      "Encryption is optional"
    ],
    "answerIndex": 2,
    "explanation": "Zero Trust removes implicit trust based on network location and emphasizes continuous verification.",
    "discussion": "It’s a strategy and architecture approach, not a single product.",
    "tags": [
      "zero-trust",
      "identity"
    ],
    "difficulty": "medium",
    "createdAt": "2025-01-23",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-023",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "In threat intelligence, which tier is most directly usable for automated detection rules?",
    "options": [
      "Strategic",
      "Operational",
      "Tactical/Technical",
      "Political"
    ],
    "answerIndex": 2,
    "explanation": "Technical/tactical intel (IOCs like IPs, hashes, domains) can be fed into detection and enrichment systems.",
    "discussion": "Strategic intel informs decisions, not immediate detections.",
    "tags": [
      "threat-intel",
      "ioc"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-24",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-024",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "A botnet is best defined as:",
    "options": [
      "A database of vulnerabilities",
      "A collection of compromised devices controlled by an attacker",
      "A SIEM correlation search",
      "A protocol for secure tunneling"
    ],
    "answerIndex": 1,
    "explanation": "Botnets are networks of compromised machines that can be used for DDoS, spam, and other tasks.",
    "discussion": "They often communicate with C2 infrastructure.",
    "tags": [
      "botnet",
      "ddos"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-25",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-025",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Account takeover most commonly relies on:",
    "options": [
      "Replacing a router",
      "Gaining unauthorized access to a user account via stolen or guessed credentials, tokens, or session cookies",
      "Only physical theft of a device",
      "Turning off logging"
    ],
    "answerIndex": 1,
    "explanation": "ATO is about compromising accounts—credentials, tokens, or sessions are typical paths.",
    "discussion": "It can be enabled by phishing, password reuse, or malware.",
    "tags": [
      "account-takeover",
      "credentials"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-26",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-026",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Which scenario best fits 'command and control (C2)' activity?",
    "options": [
      "A user resets a forgotten password",
      "A compromised host beacons to an external server for instructions",
      "A firewall blocks inbound SSH",
      "A backup job copies files to cold storage"
    ],
    "answerIndex": 1,
    "explanation": "C2 is the communication channel used by malware/attackers to receive commands and exfiltrate results.",
    "discussion": "Benign admin and backup traffic can look similar; context and indicators help distinguish.",
    "tags": [
      "c2",
      "malware"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-27",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-027",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "What differentiates a DDoS from a DoS attack?",
    "options": [
      "DDoS always targets DNS",
      "DDoS uses multiple sources to overwhelm a target",
      "DoS requires malware",
      "DoS only affects web servers"
    ],
    "answerIndex": 1,
    "explanation": "Distributed denial of service leverages many systems (often a botnet) to flood a target.",
    "discussion": "Any service can be targeted; both can be volumetric or application-layer.",
    "tags": [
      "dos",
      "ddos",
      "botnet"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-28",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-028",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "A 'supply chain attack' most directly means:",
    "options": [
      "Stealing credit cards from an e‑commerce site",
      "Compromising a vendor or update mechanism to reach downstream victims",
      "Password spraying against O365",
      "Phishing a CEO"
    ],
    "answerIndex": 1,
    "explanation": "Supply chain attacks exploit trusted third parties (vendors, libraries, updates) to compromise multiple customers.",
    "discussion": "It’s about abusing trust relationships, not a specific target type.",
    "tags": [
      "supply-chain",
      "third-party"
    ],
    "difficulty": "medium",
    "createdAt": "2025-01-29",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-029",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Ransomware typically combines which two goals?",
    "options": [
      "Persistence and stealth only",
      "Data encryption for extortion, often plus data theft for double extortion",
      "Cryptomining and DDoS only",
      "Privilege reduction and logging"
    ],
    "answerIndex": 1,
    "explanation": "Modern ransomware encrypts systems and often exfiltrates data to pressure victims to pay.",
    "discussion": "Not all campaigns steal data, but it’s common enough to be testable.",
    "tags": [
      "ransomware",
      "exfiltration"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-30",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-030",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Which is an example of 'social engineering'?",
    "options": [
      "SQL injection in a web form",
      "Convincing an employee to share an MFA code",
      "Using tstats for acceleration",
      "Patching a vulnerable library"
    ],
    "answerIndex": 1,
    "explanation": "Social engineering manipulates people rather than exploiting a purely technical vulnerability.",
    "discussion": "Phishing, vishing, and pretexting are classic forms.",
    "tags": [
      "social-engineering",
      "phishing"
    ],
    "difficulty": "easy",
    "createdAt": "2025-01-31",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-031",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "An 'APT' is best described as:",
    "options": [
      "Any malware written in Python",
      "A threat actor characterized by long-term, targeted, and well-resourced operations",
      "A vulnerability scanner",
      "A cloud security posture tool"
    ],
    "answerIndex": 1,
    "explanation": "APT commonly refers to sophisticated adversaries conducting persistent campaigns against specific targets.",
    "discussion": "The exact label is debated, but the exam expects the conventional definition.",
    "tags": [
      "apt",
      "threat-actor"
    ],
    "difficulty": "medium",
    "createdAt": "2025-02-01",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-032",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Zero Trust is primarily a model that assumes:",
    "options": [
      "Internal networks are always safe",
      "Trust is granted once per device",
      "No implicit trust; continuously verify identity, device, and context",
      "Encryption is optional"
    ],
    "answerIndex": 2,
    "explanation": "Zero Trust removes implicit trust based on network location and emphasizes continuous verification.",
    "discussion": "It’s a strategy and architecture approach, not a single product.",
    "tags": [
      "zero-trust",
      "identity"
    ],
    "difficulty": "medium",
    "createdAt": "2025-02-02",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-033",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "In threat intelligence, which tier is most directly usable for automated detection rules?",
    "options": [
      "Strategic",
      "Operational",
      "Tactical/Technical",
      "Political"
    ],
    "answerIndex": 2,
    "explanation": "Technical/tactical intel (IOCs like IPs, hashes, domains) can be fed into detection and enrichment systems.",
    "discussion": "Strategic intel informs decisions, not immediate detections.",
    "tags": [
      "threat-intel",
      "ioc"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-03",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-034",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "A botnet is best defined as:",
    "options": [
      "A database of vulnerabilities",
      "A collection of compromised devices controlled by an attacker",
      "A SIEM correlation search",
      "A protocol for secure tunneling"
    ],
    "answerIndex": 1,
    "explanation": "Botnets are networks of compromised machines that can be used for DDoS, spam, and other tasks.",
    "discussion": "They often communicate with C2 infrastructure.",
    "tags": [
      "botnet",
      "ddos"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-04",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-035",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Account takeover most commonly relies on:",
    "options": [
      "Replacing a router",
      "Gaining unauthorized access to a user account via stolen or guessed credentials, tokens, or session cookies",
      "Only physical theft of a device",
      "Turning off logging"
    ],
    "answerIndex": 1,
    "explanation": "ATO is about compromising accounts—credentials, tokens, or sessions are typical paths.",
    "discussion": "It can be enabled by phishing, password reuse, or malware.",
    "tags": [
      "account-takeover",
      "credentials"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-05",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-036",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Which scenario best fits 'command and control (C2)' activity?",
    "options": [
      "A user resets a forgotten password",
      "A compromised host beacons to an external server for instructions",
      "A firewall blocks inbound SSH",
      "A backup job copies files to cold storage"
    ],
    "answerIndex": 1,
    "explanation": "C2 is the communication channel used by malware/attackers to receive commands and exfiltrate results.",
    "discussion": "Benign admin and backup traffic can look similar; context and indicators help distinguish.",
    "tags": [
      "c2",
      "malware"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-06",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-037",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "What differentiates a DDoS from a DoS attack?",
    "options": [
      "DDoS always targets DNS",
      "DDoS uses multiple sources to overwhelm a target",
      "DoS requires malware",
      "DoS only affects web servers"
    ],
    "answerIndex": 1,
    "explanation": "Distributed denial of service leverages many systems (often a botnet) to flood a target.",
    "discussion": "Any service can be targeted; both can be volumetric or application-layer.",
    "tags": [
      "dos",
      "ddos",
      "botnet"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-07",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-038",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "A 'supply chain attack' most directly means:",
    "options": [
      "Stealing credit cards from an e‑commerce site",
      "Compromising a vendor or update mechanism to reach downstream victims",
      "Password spraying against O365",
      "Phishing a CEO"
    ],
    "answerIndex": 1,
    "explanation": "Supply chain attacks exploit trusted third parties (vendors, libraries, updates) to compromise multiple customers.",
    "discussion": "It’s about abusing trust relationships, not a specific target type.",
    "tags": [
      "supply-chain",
      "third-party"
    ],
    "difficulty": "medium",
    "createdAt": "2025-02-08",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-039",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Ransomware typically combines which two goals?",
    "options": [
      "Persistence and stealth only",
      "Data encryption for extortion, often plus data theft for double extortion",
      "Cryptomining and DDoS only",
      "Privilege reduction and logging"
    ],
    "answerIndex": 1,
    "explanation": "Modern ransomware encrypts systems and often exfiltrates data to pressure victims to pay.",
    "discussion": "Not all campaigns steal data, but it’s common enough to be testable.",
    "tags": [
      "ransomware",
      "exfiltration"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-09",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-040",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Which is an example of 'social engineering'?",
    "options": [
      "SQL injection in a web form",
      "Convincing an employee to share an MFA code",
      "Using tstats for acceleration",
      "Patching a vulnerable library"
    ],
    "answerIndex": 1,
    "explanation": "Social engineering manipulates people rather than exploiting a purely technical vulnerability.",
    "discussion": "Phishing, vishing, and pretexting are classic forms.",
    "tags": [
      "social-engineering",
      "phishing"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-10",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-041",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "An 'APT' is best described as:",
    "options": [
      "Any malware written in Python",
      "A threat actor characterized by long-term, targeted, and well-resourced operations",
      "A vulnerability scanner",
      "A cloud security posture tool"
    ],
    "answerIndex": 1,
    "explanation": "APT commonly refers to sophisticated adversaries conducting persistent campaigns against specific targets.",
    "discussion": "The exact label is debated, but the exam expects the conventional definition.",
    "tags": [
      "apt",
      "threat-actor"
    ],
    "difficulty": "medium",
    "createdAt": "2025-02-11",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-042",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Zero Trust is primarily a model that assumes:",
    "options": [
      "Internal networks are always safe",
      "Trust is granted once per device",
      "No implicit trust; continuously verify identity, device, and context",
      "Encryption is optional"
    ],
    "answerIndex": 2,
    "explanation": "Zero Trust removes implicit trust based on network location and emphasizes continuous verification.",
    "discussion": "It’s a strategy and architecture approach, not a single product.",
    "tags": [
      "zero-trust",
      "identity"
    ],
    "difficulty": "medium",
    "createdAt": "2025-02-12",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-043",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "In threat intelligence, which tier is most directly usable for automated detection rules?",
    "options": [
      "Strategic",
      "Operational",
      "Tactical/Technical",
      "Political"
    ],
    "answerIndex": 2,
    "explanation": "Technical/tactical intel (IOCs like IPs, hashes, domains) can be fed into detection and enrichment systems.",
    "discussion": "Strategic intel informs decisions, not immediate detections.",
    "tags": [
      "threat-intel",
      "ioc"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-13",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-044",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "A botnet is best defined as:",
    "options": [
      "A database of vulnerabilities",
      "A collection of compromised devices controlled by an attacker",
      "A SIEM correlation search",
      "A protocol for secure tunneling"
    ],
    "answerIndex": 1,
    "explanation": "Botnets are networks of compromised machines that can be used for DDoS, spam, and other tasks.",
    "discussion": "They often communicate with C2 infrastructure.",
    "tags": [
      "botnet",
      "ddos"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-14",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-045",
    "domain": "2.0 Threat and Attack Types, Motivations, and Tactics",
    "question": "Account takeover most commonly relies on:",
    "options": [
      "Replacing a router",
      "Gaining unauthorized access to a user account via stolen or guessed credentials, tokens, or session cookies",
      "Only physical theft of a device",
      "Turning off logging"
    ],
    "answerIndex": 1,
    "explanation": "ATO is about compromising accounts—credentials, tokens, or sessions are typical paths.",
    "discussion": "It can be enabled by phishing, password reuse, or malware.",
    "tags": [
      "account-takeover",
      "credentials"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-15",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-046",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "In Splunk Enterprise Security, the Common Information Model (CIM) is primarily used to:",
    "options": [
      "Encrypt index data at rest",
      "Normalize fields across data sources so content works consistently",
      "Replace SPL with SQL",
      "Automatically remediate incidents"
    ],
    "answerIndex": 1,
    "explanation": "CIM provides standardized field names and data models so searches and dashboards can work across vendors.",
    "discussion": "Normalization reduces the need to rewrite detections for each sourcetype.",
    "tags": [
      "cim",
      "normalization"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-16",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-047",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Data model acceleration in Splunk is mainly intended to improve performance of searches that use:",
    "options": [
      "| transaction",
      "| tstats",
      "| makeresults",
      "| sendemail"
    ],
    "answerIndex": 1,
    "explanation": "Accelerated data models support fast statistical queries via tstats.",
    "discussion": "Transaction can be expensive; acceleration doesn’t generally make transaction fast in the same way.",
    "tags": [
      "data-model",
      "acceleration",
      "tstats"
    ],
    "difficulty": "medium",
    "createdAt": "2025-02-17",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-048",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Which data source is generally MOST useful to confirm successful authentication to a Windows endpoint?",
    "options": [
      "Web proxy logs",
      "Windows Security Event Logs",
      "DNS query logs",
      "Vulnerability scan results"
    ],
    "answerIndex": 1,
    "explanation": "Windows Security Event Logs capture authentication events (e.g., logon successes/failures).",
    "discussion": "Proxy/DNS can provide supporting evidence but aren’t primary auth telemetry.",
    "tags": [
      "windows",
      "auth",
      "logs"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-18",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-049",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "The Asset and Identity frameworks in Enterprise Security help analysts by:",
    "options": [
      "Automatically deleting false positives",
      "Providing enrichment (e.g., business unit, owner, criticality) for entities involved in events",
      "Replacing the need for indexes",
      "Generating malware signatures"
    ],
    "answerIndex": 1,
    "explanation": "Assets/Identities add context to events, improving triage and prioritization.",
    "discussion": "They are enrichment frameworks, not replacement for data onboarding.",
    "tags": [
      "assets",
      "identities",
      "enrichment"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-19",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-050",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "A 'sourcetype' in Splunk is best described as:",
    "options": [
      "A license pool",
      "A label that describes the format of incoming events, used for parsing and knowledge objects",
      "A scheduled report",
      "A search head cluster member"
    ],
    "answerIndex": 1,
    "explanation": "Sourcetype influences parsing, field extraction, and how content targets data.",
    "discussion": "It’s metadata attached to events, not infrastructure.",
    "tags": [
      "sourcetype",
      "parsing"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-20",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-051",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Splunk Security Essentials (SSE) is MOST commonly used to:",
    "options": [
      "Replace Enterprise Security",
      "Assess data readiness and explore detections/use cases for available data sources",
      "Manage Splunk licenses",
      "Perform disk encryption"
    ],
    "answerIndex": 1,
    "explanation": "SSE helps you map data sources to security use cases and find guidance/content.",
    "discussion": "ES is the SIEM app; SSE is a supporting resource.",
    "tags": [
      "sse",
      "use-cases"
    ],
    "difficulty": "medium",
    "createdAt": "2025-02-21",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-052",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Which statement about CIM fields is MOST accurate?",
    "options": [
      "They are unique to one vendor",
      "They enable consistent searches across different sourcetypes by standardizing field names",
      "They are only used for dashboards, not detections",
      "They eliminate the need for field extractions"
    ],
    "answerIndex": 1,
    "explanation": "CIM standardization enables portable content; you still need proper field extraction/mapping.",
    "discussion": "Without mapping, standardized fields won’t appear correctly.",
    "tags": [
      "cim",
      "fields"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-22",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-053",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "To validate that cloud authentication events are being ingested properly, the best starting point is usually:",
    "options": [
      "Splunk license usage page",
      "A sourcetype-specific search and basic field inspection, then mapping to CIM Authentication data model",
      "Changing index retention",
      "Rebooting the forwarder"
    ],
    "answerIndex": 1,
    "explanation": "Start with the raw data, then verify fields and CIM mapping to ensure ES content works.",
    "discussion": "Operational steps come later if ingestion is broken.",
    "tags": [
      "cloud",
      "ingest",
      "cim"
    ],
    "difficulty": "medium",
    "createdAt": "2025-02-23",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-054",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Which combination best represents 'SIEM best practice' in Splunk ES?",
    "options": [
      "Store everything in one index with no retention plan",
      "Normalize with CIM, tune detections, use risk-based approaches, and enrich entities",
      "Disable acceleration to save CPU always",
      "Rely only on keyword searches"
    ],
    "answerIndex": 1,
    "explanation": "Best practice is structured data onboarding, normalization, tuning, enrichment, and risk/priority management.",
    "discussion": "Over-simplification usually increases noise and MTTR.",
    "tags": [
      "siem",
      "best-practices"
    ],
    "difficulty": "medium",
    "createdAt": "2025-02-24",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-055",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "In Splunk Enterprise Security, the Common Information Model (CIM) is primarily used to:",
    "options": [
      "Encrypt index data at rest",
      "Normalize fields across data sources so content works consistently",
      "Replace SPL with SQL",
      "Automatically remediate incidents"
    ],
    "answerIndex": 1,
    "explanation": "CIM provides standardized field names and data models so searches and dashboards can work across vendors.",
    "discussion": "Normalization reduces the need to rewrite detections for each sourcetype.",
    "tags": [
      "cim",
      "normalization"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-25",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-056",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Data model acceleration in Splunk is mainly intended to improve performance of searches that use:",
    "options": [
      "| transaction",
      "| tstats",
      "| makeresults",
      "| sendemail"
    ],
    "answerIndex": 1,
    "explanation": "Accelerated data models support fast statistical queries via tstats.",
    "discussion": "Transaction can be expensive; acceleration doesn’t generally make transaction fast in the same way.",
    "tags": [
      "data-model",
      "acceleration",
      "tstats"
    ],
    "difficulty": "medium",
    "createdAt": "2025-02-26",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-057",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Which data source is generally MOST useful to confirm successful authentication to a Windows endpoint?",
    "options": [
      "Web proxy logs",
      "Windows Security Event Logs",
      "DNS query logs",
      "Vulnerability scan results"
    ],
    "answerIndex": 1,
    "explanation": "Windows Security Event Logs capture authentication events (e.g., logon successes/failures).",
    "discussion": "Proxy/DNS can provide supporting evidence but aren’t primary auth telemetry.",
    "tags": [
      "windows",
      "auth",
      "logs"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-27",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-058",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "The Asset and Identity frameworks in Enterprise Security help analysts by:",
    "options": [
      "Automatically deleting false positives",
      "Providing enrichment (e.g., business unit, owner, criticality) for entities involved in events",
      "Replacing the need for indexes",
      "Generating malware signatures"
    ],
    "answerIndex": 1,
    "explanation": "Assets/Identities add context to events, improving triage and prioritization.",
    "discussion": "They are enrichment frameworks, not replacement for data onboarding.",
    "tags": [
      "assets",
      "identities",
      "enrichment"
    ],
    "difficulty": "easy",
    "createdAt": "2025-02-28",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-059",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "A 'sourcetype' in Splunk is best described as:",
    "options": [
      "A license pool",
      "A label that describes the format of incoming events, used for parsing and knowledge objects",
      "A scheduled report",
      "A search head cluster member"
    ],
    "answerIndex": 1,
    "explanation": "Sourcetype influences parsing, field extraction, and how content targets data.",
    "discussion": "It’s metadata attached to events, not infrastructure.",
    "tags": [
      "sourcetype",
      "parsing"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-01",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-060",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Splunk Security Essentials (SSE) is MOST commonly used to:",
    "options": [
      "Replace Enterprise Security",
      "Assess data readiness and explore detections/use cases for available data sources",
      "Manage Splunk licenses",
      "Perform disk encryption"
    ],
    "answerIndex": 1,
    "explanation": "SSE helps you map data sources to security use cases and find guidance/content.",
    "discussion": "ES is the SIEM app; SSE is a supporting resource.",
    "tags": [
      "sse",
      "use-cases"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-02",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-061",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Which statement about CIM fields is MOST accurate?",
    "options": [
      "They are unique to one vendor",
      "They enable consistent searches across different sourcetypes by standardizing field names",
      "They are only used for dashboards, not detections",
      "They eliminate the need for field extractions"
    ],
    "answerIndex": 1,
    "explanation": "CIM standardization enables portable content; you still need proper field extraction/mapping.",
    "discussion": "Without mapping, standardized fields won’t appear correctly.",
    "tags": [
      "cim",
      "fields"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-03",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-062",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "To validate that cloud authentication events are being ingested properly, the best starting point is usually:",
    "options": [
      "Splunk license usage page",
      "A sourcetype-specific search and basic field inspection, then mapping to CIM Authentication data model",
      "Changing index retention",
      "Rebooting the forwarder"
    ],
    "answerIndex": 1,
    "explanation": "Start with the raw data, then verify fields and CIM mapping to ensure ES content works.",
    "discussion": "Operational steps come later if ingestion is broken.",
    "tags": [
      "cloud",
      "ingest",
      "cim"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-04",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-063",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Which combination best represents 'SIEM best practice' in Splunk ES?",
    "options": [
      "Store everything in one index with no retention plan",
      "Normalize with CIM, tune detections, use risk-based approaches, and enrich entities",
      "Disable acceleration to save CPU always",
      "Rely only on keyword searches"
    ],
    "answerIndex": 1,
    "explanation": "Best practice is structured data onboarding, normalization, tuning, enrichment, and risk/priority management.",
    "discussion": "Over-simplification usually increases noise and MTTR.",
    "tags": [
      "siem",
      "best-practices"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-05",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-064",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "In Splunk Enterprise Security, the Common Information Model (CIM) is primarily used to:",
    "options": [
      "Encrypt index data at rest",
      "Normalize fields across data sources so content works consistently",
      "Replace SPL with SQL",
      "Automatically remediate incidents"
    ],
    "answerIndex": 1,
    "explanation": "CIM provides standardized field names and data models so searches and dashboards can work across vendors.",
    "discussion": "Normalization reduces the need to rewrite detections for each sourcetype.",
    "tags": [
      "cim",
      "normalization"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-06",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-065",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Data model acceleration in Splunk is mainly intended to improve performance of searches that use:",
    "options": [
      "| transaction",
      "| tstats",
      "| makeresults",
      "| sendemail"
    ],
    "answerIndex": 1,
    "explanation": "Accelerated data models support fast statistical queries via tstats.",
    "discussion": "Transaction can be expensive; acceleration doesn’t generally make transaction fast in the same way.",
    "tags": [
      "data-model",
      "acceleration",
      "tstats"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-07",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-066",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Which data source is generally MOST useful to confirm successful authentication to a Windows endpoint?",
    "options": [
      "Web proxy logs",
      "Windows Security Event Logs",
      "DNS query logs",
      "Vulnerability scan results"
    ],
    "answerIndex": 1,
    "explanation": "Windows Security Event Logs capture authentication events (e.g., logon successes/failures).",
    "discussion": "Proxy/DNS can provide supporting evidence but aren’t primary auth telemetry.",
    "tags": [
      "windows",
      "auth",
      "logs"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-08",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-067",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "The Asset and Identity frameworks in Enterprise Security help analysts by:",
    "options": [
      "Automatically deleting false positives",
      "Providing enrichment (e.g., business unit, owner, criticality) for entities involved in events",
      "Replacing the need for indexes",
      "Generating malware signatures"
    ],
    "answerIndex": 1,
    "explanation": "Assets/Identities add context to events, improving triage and prioritization.",
    "discussion": "They are enrichment frameworks, not replacement for data onboarding.",
    "tags": [
      "assets",
      "identities",
      "enrichment"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-09",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-068",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "A 'sourcetype' in Splunk is best described as:",
    "options": [
      "A license pool",
      "A label that describes the format of incoming events, used for parsing and knowledge objects",
      "A scheduled report",
      "A search head cluster member"
    ],
    "answerIndex": 1,
    "explanation": "Sourcetype influences parsing, field extraction, and how content targets data.",
    "discussion": "It’s metadata attached to events, not infrastructure.",
    "tags": [
      "sourcetype",
      "parsing"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-10",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-069",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Splunk Security Essentials (SSE) is MOST commonly used to:",
    "options": [
      "Replace Enterprise Security",
      "Assess data readiness and explore detections/use cases for available data sources",
      "Manage Splunk licenses",
      "Perform disk encryption"
    ],
    "answerIndex": 1,
    "explanation": "SSE helps you map data sources to security use cases and find guidance/content.",
    "discussion": "ES is the SIEM app; SSE is a supporting resource.",
    "tags": [
      "sse",
      "use-cases"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-11",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-070",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Which statement about CIM fields is MOST accurate?",
    "options": [
      "They are unique to one vendor",
      "They enable consistent searches across different sourcetypes by standardizing field names",
      "They are only used for dashboards, not detections",
      "They eliminate the need for field extractions"
    ],
    "answerIndex": 1,
    "explanation": "CIM standardization enables portable content; you still need proper field extraction/mapping.",
    "discussion": "Without mapping, standardized fields won’t appear correctly.",
    "tags": [
      "cim",
      "fields"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-12",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-071",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "To validate that cloud authentication events are being ingested properly, the best starting point is usually:",
    "options": [
      "Splunk license usage page",
      "A sourcetype-specific search and basic field inspection, then mapping to CIM Authentication data model",
      "Changing index retention",
      "Rebooting the forwarder"
    ],
    "answerIndex": 1,
    "explanation": "Start with the raw data, then verify fields and CIM mapping to ensure ES content works.",
    "discussion": "Operational steps come later if ingestion is broken.",
    "tags": [
      "cloud",
      "ingest",
      "cim"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-13",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-072",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Which combination best represents 'SIEM best practice' in Splunk ES?",
    "options": [
      "Store everything in one index with no retention plan",
      "Normalize with CIM, tune detections, use risk-based approaches, and enrich entities",
      "Disable acceleration to save CPU always",
      "Rely only on keyword searches"
    ],
    "answerIndex": 1,
    "explanation": "Best practice is structured data onboarding, normalization, tuning, enrichment, and risk/priority management.",
    "discussion": "Over-simplification usually increases noise and MTTR.",
    "tags": [
      "siem",
      "best-practices"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-14",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-073",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "In Splunk Enterprise Security, the Common Information Model (CIM) is primarily used to:",
    "options": [
      "Encrypt index data at rest",
      "Normalize fields across data sources so content works consistently",
      "Replace SPL with SQL",
      "Automatically remediate incidents"
    ],
    "answerIndex": 1,
    "explanation": "CIM provides standardized field names and data models so searches and dashboards can work across vendors.",
    "discussion": "Normalization reduces the need to rewrite detections for each sourcetype.",
    "tags": [
      "cim",
      "normalization"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-15",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-074",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Data model acceleration in Splunk is mainly intended to improve performance of searches that use:",
    "options": [
      "| transaction",
      "| tstats",
      "| makeresults",
      "| sendemail"
    ],
    "answerIndex": 1,
    "explanation": "Accelerated data models support fast statistical queries via tstats.",
    "discussion": "Transaction can be expensive; acceleration doesn’t generally make transaction fast in the same way.",
    "tags": [
      "data-model",
      "acceleration",
      "tstats"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-16",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-075",
    "domain": "3.0 Defenses, Data Sources, and SIEM Best Practices",
    "question": "Which data source is generally MOST useful to confirm successful authentication to a Windows endpoint?",
    "options": [
      "Web proxy logs",
      "Windows Security Event Logs",
      "DNS query logs",
      "Vulnerability scan results"
    ],
    "answerIndex": 1,
    "explanation": "Windows Security Event Logs capture authentication events (e.g., logon successes/failures).",
    "discussion": "Proxy/DNS can provide supporting evidence but aren’t primary auth telemetry.",
    "tags": [
      "windows",
      "auth",
      "logs"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-17",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-076",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "In Splunk’s investigation mindset, 'triage' is best described as:",
    "options": [
      "Writing a new parser for logs",
      "Quickly assessing an alert’s validity and priority to decide next actions",
      "Deleting all duplicate events",
      "Upgrading Splunk"
    ],
    "answerIndex": 1,
    "explanation": "Triage is rapid validation and prioritization before deeper investigation.",
    "discussion": "It aims to reduce noise and focus effort.",
    "tags": [
      "investigation",
      "triage"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-18",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-077",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "MTTR in a SOC typically stands for:",
    "options": [
      "Mean Time To Respond/Resolve",
      "Maximum Time To Report",
      "Median Threat Triage Rate",
      "Managed Threat Tool Registry"
    ],
    "answerIndex": 0,
    "explanation": "MTTR is a common metric for how long it takes to respond to or resolve incidents.",
    "discussion": "Organizations may define it slightly differently, but the acronym is consistent.",
    "tags": [
      "metrics",
      "mttr"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-19",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-078",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "A 'Notable Event' in Splunk Enterprise Security is generally:",
    "options": [
      "Any event in an index",
      "An alert-worthy security event created by a correlation search for analyst review",
      "A lookup table row",
      "A scheduled maintenance message"
    ],
    "answerIndex": 1,
    "explanation": "Correlation searches create notable events when conditions match detection logic.",
    "discussion": "Notables are the primary workload items in ES incident triage.",
    "tags": [
      "notable",
      "correlation-search"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-20",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-079",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Risk-Based Alerting (RBA) is designed to:",
    "options": [
      "Generate more alerts for every detection",
      "Aggregate risk signals over time so fewer, higher-confidence alerts are produced when risk exceeds a threshold",
      "Disable correlation searches",
      "Replace data onboarding"
    ],
    "answerIndex": 1,
    "explanation": "RBA assigns risk scores to entities and triggers a risk notable when accumulated risk crosses a threshold.",
    "discussion": "This helps reduce alert fatigue and prioritize meaningful activity.",
    "tags": [
      "rba",
      "risk"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-21",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-080",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "An Adaptive Response Action in ES is best described as:",
    "options": [
      "A Splunk index-time field extraction",
      "An automated action triggered from a notable (or correlation search) such as creating a ticket or running a response workflow",
      "A Windows service",
      "A dashboard filter"
    ],
    "answerIndex": 1,
    "explanation": "Adaptive responses enable orchestration/automation steps tied to detections.",
    "discussion": "They can integrate with SOAR or external tools depending on configuration.",
    "tags": [
      "adaptive-response",
      "automation"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-22",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-081",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Which disposition is MOST appropriate when an alert is confirmed benign and does not require further action?",
    "options": [
      "True positive",
      "False positive",
      "Duplicate",
      "Needs escalation"
    ],
    "answerIndex": 1,
    "explanation": "A false positive indicates the detection fired but the activity was benign or not relevant.",
    "discussion": "Duplicate is used when it’s the same incident already handled elsewhere.",
    "tags": [
      "disposition",
      "triage"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-23",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-082",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Dwell time generally measures:",
    "options": [
      "Time between log ingestion and indexing",
      "Time an attacker remains undetected in an environment",
      "Time to reboot search heads",
      "Time between two dashboards refreshes"
    ],
    "answerIndex": 1,
    "explanation": "Dwell time is a security metric about how long adversary activity persists before detection/containment.",
    "discussion": "Reducing dwell time is a key outcome for SOC maturity.",
    "tags": [
      "metrics",
      "dwell-time"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-24",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-083",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "A 'Risk Object' in ES refers to:",
    "options": [
      "A Splunk index",
      "An entity (user, system, IP, etc.) that accumulates risk scores",
      "A PDF report",
      "A firewall rule"
    ],
    "answerIndex": 1,
    "explanation": "Risk objects are the entities to which risk is assigned and tracked in the Risk framework.",
    "discussion": "They enable RBA across detections and time.",
    "tags": [
      "risk-object",
      "entity"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-25",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-084",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Which built-in ES dashboard is most likely to help you understand the volume and status of notable events over time?",
    "options": [
      "License Master",
      "Incident Review / Notables",
      "Indexer Clustering",
      "KV Store Status"
    ],
    "answerIndex": 1,
    "explanation": "Incident Review/Notables dashboards show notable event queues, status, and related context.",
    "discussion": "Infrastructure dashboards serve admin needs, not investigative workflow.",
    "tags": [
      "dashboards",
      "incident-review"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-26",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-085",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Contributing Events are best described as:",
    "options": [
      "Events that are deleted after a notable is created",
      "The events that matched a correlation search and provide the evidence behind a notable/risk signal",
      "Only events from the _internal index",
      "Only events with a severity field"
    ],
    "answerIndex": 1,
    "explanation": "Contributing events are the evidence set that explains why the detection fired.",
    "discussion": "They’re essential for analyst validation and documentation.",
    "tags": [
      "contributing-events",
      "evidence"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-27",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-086",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "In Splunk’s investigation mindset, 'triage' is best described as:",
    "options": [
      "Writing a new parser for logs",
      "Quickly assessing an alert’s validity and priority to decide next actions",
      "Deleting all duplicate events",
      "Upgrading Splunk"
    ],
    "answerIndex": 1,
    "explanation": "Triage is rapid validation and prioritization before deeper investigation.",
    "discussion": "It aims to reduce noise and focus effort.",
    "tags": [
      "investigation",
      "triage"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-28",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-087",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "MTTR in a SOC typically stands for:",
    "options": [
      "Mean Time To Respond/Resolve",
      "Maximum Time To Report",
      "Median Threat Triage Rate",
      "Managed Threat Tool Registry"
    ],
    "answerIndex": 0,
    "explanation": "MTTR is a common metric for how long it takes to respond to or resolve incidents.",
    "discussion": "Organizations may define it slightly differently, but the acronym is consistent.",
    "tags": [
      "metrics",
      "mttr"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-29",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-088",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "A 'Notable Event' in Splunk Enterprise Security is generally:",
    "options": [
      "Any event in an index",
      "An alert-worthy security event created by a correlation search for analyst review",
      "A lookup table row",
      "A scheduled maintenance message"
    ],
    "answerIndex": 1,
    "explanation": "Correlation searches create notable events when conditions match detection logic.",
    "discussion": "Notables are the primary workload items in ES incident triage.",
    "tags": [
      "notable",
      "correlation-search"
    ],
    "difficulty": "easy",
    "createdAt": "2025-03-30",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-089",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Risk-Based Alerting (RBA) is designed to:",
    "options": [
      "Generate more alerts for every detection",
      "Aggregate risk signals over time so fewer, higher-confidence alerts are produced when risk exceeds a threshold",
      "Disable correlation searches",
      "Replace data onboarding"
    ],
    "answerIndex": 1,
    "explanation": "RBA assigns risk scores to entities and triggers a risk notable when accumulated risk crosses a threshold.",
    "discussion": "This helps reduce alert fatigue and prioritize meaningful activity.",
    "tags": [
      "rba",
      "risk"
    ],
    "difficulty": "medium",
    "createdAt": "2025-03-31",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-090",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "An Adaptive Response Action in ES is best described as:",
    "options": [
      "A Splunk index-time field extraction",
      "An automated action triggered from a notable (or correlation search) such as creating a ticket or running a response workflow",
      "A Windows service",
      "A dashboard filter"
    ],
    "answerIndex": 1,
    "explanation": "Adaptive responses enable orchestration/automation steps tied to detections.",
    "discussion": "They can integrate with SOAR or external tools depending on configuration.",
    "tags": [
      "adaptive-response",
      "automation"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-01",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-091",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Which disposition is MOST appropriate when an alert is confirmed benign and does not require further action?",
    "options": [
      "True positive",
      "False positive",
      "Duplicate",
      "Needs escalation"
    ],
    "answerIndex": 1,
    "explanation": "A false positive indicates the detection fired but the activity was benign or not relevant.",
    "discussion": "Duplicate is used when it’s the same incident already handled elsewhere.",
    "tags": [
      "disposition",
      "triage"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-02",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-092",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Dwell time generally measures:",
    "options": [
      "Time between log ingestion and indexing",
      "Time an attacker remains undetected in an environment",
      "Time to reboot search heads",
      "Time between two dashboards refreshes"
    ],
    "answerIndex": 1,
    "explanation": "Dwell time is a security metric about how long adversary activity persists before detection/containment.",
    "discussion": "Reducing dwell time is a key outcome for SOC maturity.",
    "tags": [
      "metrics",
      "dwell-time"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-03",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-093",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "A 'Risk Object' in ES refers to:",
    "options": [
      "A Splunk index",
      "An entity (user, system, IP, etc.) that accumulates risk scores",
      "A PDF report",
      "A firewall rule"
    ],
    "answerIndex": 1,
    "explanation": "Risk objects are the entities to which risk is assigned and tracked in the Risk framework.",
    "discussion": "They enable RBA across detections and time.",
    "tags": [
      "risk-object",
      "entity"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-04",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-094",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Which built-in ES dashboard is most likely to help you understand the volume and status of notable events over time?",
    "options": [
      "License Master",
      "Incident Review / Notables",
      "Indexer Clustering",
      "KV Store Status"
    ],
    "answerIndex": 1,
    "explanation": "Incident Review/Notables dashboards show notable event queues, status, and related context.",
    "discussion": "Infrastructure dashboards serve admin needs, not investigative workflow.",
    "tags": [
      "dashboards",
      "incident-review"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-05",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-095",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Contributing Events are best described as:",
    "options": [
      "Events that are deleted after a notable is created",
      "The events that matched a correlation search and provide the evidence behind a notable/risk signal",
      "Only events from the _internal index",
      "Only events with a severity field"
    ],
    "answerIndex": 1,
    "explanation": "Contributing events are the evidence set that explains why the detection fired.",
    "discussion": "They’re essential for analyst validation and documentation.",
    "tags": [
      "contributing-events",
      "evidence"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-06",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-096",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "In Splunk’s investigation mindset, 'triage' is best described as:",
    "options": [
      "Writing a new parser for logs",
      "Quickly assessing an alert’s validity and priority to decide next actions",
      "Deleting all duplicate events",
      "Upgrading Splunk"
    ],
    "answerIndex": 1,
    "explanation": "Triage is rapid validation and prioritization before deeper investigation.",
    "discussion": "It aims to reduce noise and focus effort.",
    "tags": [
      "investigation",
      "triage"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-07",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-097",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "MTTR in a SOC typically stands for:",
    "options": [
      "Mean Time To Respond/Resolve",
      "Maximum Time To Report",
      "Median Threat Triage Rate",
      "Managed Threat Tool Registry"
    ],
    "answerIndex": 0,
    "explanation": "MTTR is a common metric for how long it takes to respond to or resolve incidents.",
    "discussion": "Organizations may define it slightly differently, but the acronym is consistent.",
    "tags": [
      "metrics",
      "mttr"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-08",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-098",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "A 'Notable Event' in Splunk Enterprise Security is generally:",
    "options": [
      "Any event in an index",
      "An alert-worthy security event created by a correlation search for analyst review",
      "A lookup table row",
      "A scheduled maintenance message"
    ],
    "answerIndex": 1,
    "explanation": "Correlation searches create notable events when conditions match detection logic.",
    "discussion": "Notables are the primary workload items in ES incident triage.",
    "tags": [
      "notable",
      "correlation-search"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-09",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-099",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Risk-Based Alerting (RBA) is designed to:",
    "options": [
      "Generate more alerts for every detection",
      "Aggregate risk signals over time so fewer, higher-confidence alerts are produced when risk exceeds a threshold",
      "Disable correlation searches",
      "Replace data onboarding"
    ],
    "answerIndex": 1,
    "explanation": "RBA assigns risk scores to entities and triggers a risk notable when accumulated risk crosses a threshold.",
    "discussion": "This helps reduce alert fatigue and prioritize meaningful activity.",
    "tags": [
      "rba",
      "risk"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-10",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-100",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "An Adaptive Response Action in ES is best described as:",
    "options": [
      "A Splunk index-time field extraction",
      "An automated action triggered from a notable (or correlation search) such as creating a ticket or running a response workflow",
      "A Windows service",
      "A dashboard filter"
    ],
    "answerIndex": 1,
    "explanation": "Adaptive responses enable orchestration/automation steps tied to detections.",
    "discussion": "They can integrate with SOAR or external tools depending on configuration.",
    "tags": [
      "adaptive-response",
      "automation"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-11",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-101",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Which disposition is MOST appropriate when an alert is confirmed benign and does not require further action?",
    "options": [
      "True positive",
      "False positive",
      "Duplicate",
      "Needs escalation"
    ],
    "answerIndex": 1,
    "explanation": "A false positive indicates the detection fired but the activity was benign or not relevant.",
    "discussion": "Duplicate is used when it’s the same incident already handled elsewhere.",
    "tags": [
      "disposition",
      "triage"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-12",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-102",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Dwell time generally measures:",
    "options": [
      "Time between log ingestion and indexing",
      "Time an attacker remains undetected in an environment",
      "Time to reboot search heads",
      "Time between two dashboards refreshes"
    ],
    "answerIndex": 1,
    "explanation": "Dwell time is a security metric about how long adversary activity persists before detection/containment.",
    "discussion": "Reducing dwell time is a key outcome for SOC maturity.",
    "tags": [
      "metrics",
      "dwell-time"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-13",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-103",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "A 'Risk Object' in ES refers to:",
    "options": [
      "A Splunk index",
      "An entity (user, system, IP, etc.) that accumulates risk scores",
      "A PDF report",
      "A firewall rule"
    ],
    "answerIndex": 1,
    "explanation": "Risk objects are the entities to which risk is assigned and tracked in the Risk framework.",
    "discussion": "They enable RBA across detections and time.",
    "tags": [
      "risk-object",
      "entity"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-14",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-104",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Which built-in ES dashboard is most likely to help you understand the volume and status of notable events over time?",
    "options": [
      "License Master",
      "Incident Review / Notables",
      "Indexer Clustering",
      "KV Store Status"
    ],
    "answerIndex": 1,
    "explanation": "Incident Review/Notables dashboards show notable event queues, status, and related context.",
    "discussion": "Infrastructure dashboards serve admin needs, not investigative workflow.",
    "tags": [
      "dashboards",
      "incident-review"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-15",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-105",
    "domain": "4.0 Investigation, Event Handling, Correlation, and Risk",
    "question": "Contributing Events are best described as:",
    "options": [
      "Events that are deleted after a notable is created",
      "The events that matched a correlation search and provide the evidence behind a notable/risk signal",
      "Only events from the _internal index",
      "Only events with a severity field"
    ],
    "answerIndex": 1,
    "explanation": "Contributing events are the evidence set that explains why the detection fired.",
    "discussion": "They’re essential for analyst validation and documentation.",
    "tags": [
      "contributing-events",
      "evidence"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-16",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-106",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which SPL command is typically preferred for fast statistics over accelerated data models?",
    "options": [
      "transaction",
      "tstats",
      "join",
      "appendpipe"
    ],
    "answerIndex": 1,
    "explanation": "tstats is optimized for statistical queries, especially with data model acceleration.",
    "discussion": "transaction and join can be expensive at scale.",
    "tags": [
      "spl",
      "tstats"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-17",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-107",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "You have a field 'user' containing 'DOMAIN\\\\alice'. Which SPL approach is best to extract the username portion?",
    "options": [
      "| rex field=user \"\\\\\\\\(?<username>.+)$\"",
      "| eval username=user",
      "| transaction user",
      "| tstats count by user"
    ],
    "answerIndex": 0,
    "explanation": "rex allows you to extract part of a field using regex into a new field like username.",
    "discussion": "eval alone won’t split the string unless you add functions; transaction/tstats aren’t for parsing.",
    "tags": [
      "spl",
      "rex"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-18",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-108",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which practice MOST improves search efficiency in Splunk?",
    "options": [
      "Use leading wildcards in every search",
      "Filter early (index, sourcetype, time range) and avoid unnecessary commands like transaction when alternatives exist",
      "Always use join for enrichment",
      "Search all time to avoid missing data"
    ],
    "answerIndex": 1,
    "explanation": "Narrowing scope early reduces scanned data and improves runtime; avoiding expensive commands helps.",
    "discussion": "Leading wildcards and broad time ranges are common performance killers.",
    "tags": [
      "efficiency",
      "best-practices"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-19",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-109",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "What does the SPL command 'makeresults' primarily do?",
    "options": [
      "Creates an index",
      "Generates a single synthetic event/result to build tests or examples",
      "Optimizes a data model",
      "Deletes duplicate events"
    ],
    "answerIndex": 1,
    "explanation": "makeresults is used to create synthetic results for demos, tests, or building lookups.",
    "discussion": "It’s not related to indexing or deletion.",
    "tags": [
      "makeresults",
      "spl"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-20",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-110",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "In SPL, FIRST() and LAST() are commonly used to:",
    "options": [
      "Encrypt fields",
      "Return the first/last value of a field within a group when using stats",
      "Accelerate data models",
      "Convert timestamps"
    ],
    "answerIndex": 1,
    "explanation": "FIRST/LAST are aggregation functions used inside stats (or similar) to pick boundary values.",
    "discussion": "They depend on event ordering; be cautious and sort if needed.",
    "tags": [
      "spl",
      "stats",
      "first-last"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-21",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-111",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "When would TRANSACTION be an appropriate choice?",
    "options": [
      "When you need simple counts by field",
      "When you need to group events into sessions based on start/end markers and time constraints, and you accept the performance cost",
      "When you want to accelerate a data model",
      "When you want to parse JSON"
    ],
    "answerIndex": 1,
    "explanation": "transaction can model sessions but is costly; alternatives like stats and streamstats may be better.",
    "discussion": "Use it deliberately when logic is otherwise complex.",
    "tags": [
      "transaction",
      "sessions"
    ],
    "difficulty": "hard",
    "createdAt": "2025-04-22",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-112",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which SPL command is used to enrich events by matching a field to a lookup table?",
    "options": [
      "lookup",
      "fields",
      "convert",
      "sistats"
    ],
    "answerIndex": 0,
    "explanation": "lookup matches event fields to a table to add enrichment (e.g., asset criticality).",
    "discussion": "fields selects fields; convert changes formats.",
    "tags": [
      "lookup",
      "enrichment"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-23",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-113",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "FOREACH in SPL is primarily used to:",
    "options": [
      "Loop over multiple fields and apply the same eval/operation to each",
      "Send results by email",
      "Create a report",
      "Accelerate indexes"
    ],
    "answerIndex": 0,
    "explanation": "foreach helps apply similar logic across many fields without repeating code.",
    "discussion": "It’s a convenience for SPL authoring.",
    "tags": [
      "foreach",
      "spl"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-24",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-114",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "A common ES/Splunk resource for SPL examples and security content guidance is:",
    "options": [
      "Splunk Lantern and Splunk Security Essentials",
      "Windows Event Viewer",
      "Wireshark",
      "Kali Linux"
    ],
    "answerIndex": 0,
    "explanation": "Lantern and SSE provide vetted guidance and examples tailored to Splunk use cases.",
    "discussion": "The others are useful tools but not Splunk content resources.",
    "tags": [
      "resources",
      "lantern",
      "sse"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-25",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-115",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which is the BEST way to reduce the cost of repeated searches that summarize large datasets?",
    "options": [
      "Disable indexing",
      "Use summary indexing or data model acceleration + tstats where appropriate",
      "Use more wildcards",
      "Run searches more frequently"
    ],
    "answerIndex": 1,
    "explanation": "Summary techniques (summary indexing, acceleration) reduce repeated raw scans.",
    "discussion": "More frequent raw scans increase cost.",
    "tags": [
      "performance",
      "acceleration"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-26",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-116",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which SPL command is typically preferred for fast statistics over accelerated data models?",
    "options": [
      "transaction",
      "tstats",
      "join",
      "appendpipe"
    ],
    "answerIndex": 1,
    "explanation": "tstats is optimized for statistical queries, especially with data model acceleration.",
    "discussion": "transaction and join can be expensive at scale.",
    "tags": [
      "spl",
      "tstats"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-27",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-117",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "You have a field 'user' containing 'DOMAIN\\\\alice'. Which SPL approach is best to extract the username portion?",
    "options": [
      "| rex field=user \"\\\\\\\\(?<username>.+)$\"",
      "| eval username=user",
      "| transaction user",
      "| tstats count by user"
    ],
    "answerIndex": 0,
    "explanation": "rex allows you to extract part of a field using regex into a new field like username.",
    "discussion": "eval alone won’t split the string unless you add functions; transaction/tstats aren’t for parsing.",
    "tags": [
      "spl",
      "rex"
    ],
    "difficulty": "medium",
    "createdAt": "2025-04-28",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-118",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which practice MOST improves search efficiency in Splunk?",
    "options": [
      "Use leading wildcards in every search",
      "Filter early (index, sourcetype, time range) and avoid unnecessary commands like transaction when alternatives exist",
      "Always use join for enrichment",
      "Search all time to avoid missing data"
    ],
    "answerIndex": 1,
    "explanation": "Narrowing scope early reduces scanned data and improves runtime; avoiding expensive commands helps.",
    "discussion": "Leading wildcards and broad time ranges are common performance killers.",
    "tags": [
      "efficiency",
      "best-practices"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-29",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-119",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "What does the SPL command 'makeresults' primarily do?",
    "options": [
      "Creates an index",
      "Generates a single synthetic event/result to build tests or examples",
      "Optimizes a data model",
      "Deletes duplicate events"
    ],
    "answerIndex": 1,
    "explanation": "makeresults is used to create synthetic results for demos, tests, or building lookups.",
    "discussion": "It’s not related to indexing or deletion.",
    "tags": [
      "makeresults",
      "spl"
    ],
    "difficulty": "easy",
    "createdAt": "2025-04-30",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-120",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "In SPL, FIRST() and LAST() are commonly used to:",
    "options": [
      "Encrypt fields",
      "Return the first/last value of a field within a group when using stats",
      "Accelerate data models",
      "Convert timestamps"
    ],
    "answerIndex": 1,
    "explanation": "FIRST/LAST are aggregation functions used inside stats (or similar) to pick boundary values.",
    "discussion": "They depend on event ordering; be cautious and sort if needed.",
    "tags": [
      "spl",
      "stats",
      "first-last"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-01",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-121",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "When would TRANSACTION be an appropriate choice?",
    "options": [
      "When you need simple counts by field",
      "When you need to group events into sessions based on start/end markers and time constraints, and you accept the performance cost",
      "When you want to accelerate a data model",
      "When you want to parse JSON"
    ],
    "answerIndex": 1,
    "explanation": "transaction can model sessions but is costly; alternatives like stats and streamstats may be better.",
    "discussion": "Use it deliberately when logic is otherwise complex.",
    "tags": [
      "transaction",
      "sessions"
    ],
    "difficulty": "hard",
    "createdAt": "2025-05-02",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-122",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which SPL command is used to enrich events by matching a field to a lookup table?",
    "options": [
      "lookup",
      "fields",
      "convert",
      "sistats"
    ],
    "answerIndex": 0,
    "explanation": "lookup matches event fields to a table to add enrichment (e.g., asset criticality).",
    "discussion": "fields selects fields; convert changes formats.",
    "tags": [
      "lookup",
      "enrichment"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-03",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-123",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "FOREACH in SPL is primarily used to:",
    "options": [
      "Loop over multiple fields and apply the same eval/operation to each",
      "Send results by email",
      "Create a report",
      "Accelerate indexes"
    ],
    "answerIndex": 0,
    "explanation": "foreach helps apply similar logic across many fields without repeating code.",
    "discussion": "It’s a convenience for SPL authoring.",
    "tags": [
      "foreach",
      "spl"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-04",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-124",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "A common ES/Splunk resource for SPL examples and security content guidance is:",
    "options": [
      "Splunk Lantern and Splunk Security Essentials",
      "Windows Event Viewer",
      "Wireshark",
      "Kali Linux"
    ],
    "answerIndex": 0,
    "explanation": "Lantern and SSE provide vetted guidance and examples tailored to Splunk use cases.",
    "discussion": "The others are useful tools but not Splunk content resources.",
    "tags": [
      "resources",
      "lantern",
      "sse"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-05",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-125",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which is the BEST way to reduce the cost of repeated searches that summarize large datasets?",
    "options": [
      "Disable indexing",
      "Use summary indexing or data model acceleration + tstats where appropriate",
      "Use more wildcards",
      "Run searches more frequently"
    ],
    "answerIndex": 1,
    "explanation": "Summary techniques (summary indexing, acceleration) reduce repeated raw scans.",
    "discussion": "More frequent raw scans increase cost.",
    "tags": [
      "performance",
      "acceleration"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-06",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-126",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which SPL command is typically preferred for fast statistics over accelerated data models?",
    "options": [
      "transaction",
      "tstats",
      "join",
      "appendpipe"
    ],
    "answerIndex": 1,
    "explanation": "tstats is optimized for statistical queries, especially with data model acceleration.",
    "discussion": "transaction and join can be expensive at scale.",
    "tags": [
      "spl",
      "tstats"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-07",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-127",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "You have a field 'user' containing 'DOMAIN\\\\alice'. Which SPL approach is best to extract the username portion?",
    "options": [
      "| rex field=user \"\\\\\\\\(?<username>.+)$\"",
      "| eval username=user",
      "| transaction user",
      "| tstats count by user"
    ],
    "answerIndex": 0,
    "explanation": "rex allows you to extract part of a field using regex into a new field like username.",
    "discussion": "eval alone won’t split the string unless you add functions; transaction/tstats aren’t for parsing.",
    "tags": [
      "spl",
      "rex"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-08",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-128",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which practice MOST improves search efficiency in Splunk?",
    "options": [
      "Use leading wildcards in every search",
      "Filter early (index, sourcetype, time range) and avoid unnecessary commands like transaction when alternatives exist",
      "Always use join for enrichment",
      "Search all time to avoid missing data"
    ],
    "answerIndex": 1,
    "explanation": "Narrowing scope early reduces scanned data and improves runtime; avoiding expensive commands helps.",
    "discussion": "Leading wildcards and broad time ranges are common performance killers.",
    "tags": [
      "efficiency",
      "best-practices"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-09",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-129",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "What does the SPL command 'makeresults' primarily do?",
    "options": [
      "Creates an index",
      "Generates a single synthetic event/result to build tests or examples",
      "Optimizes a data model",
      "Deletes duplicate events"
    ],
    "answerIndex": 1,
    "explanation": "makeresults is used to create synthetic results for demos, tests, or building lookups.",
    "discussion": "It’s not related to indexing or deletion.",
    "tags": [
      "makeresults",
      "spl"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-10",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-130",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "In SPL, FIRST() and LAST() are commonly used to:",
    "options": [
      "Encrypt fields",
      "Return the first/last value of a field within a group when using stats",
      "Accelerate data models",
      "Convert timestamps"
    ],
    "answerIndex": 1,
    "explanation": "FIRST/LAST are aggregation functions used inside stats (or similar) to pick boundary values.",
    "discussion": "They depend on event ordering; be cautious and sort if needed.",
    "tags": [
      "spl",
      "stats",
      "first-last"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-11",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-131",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "When would TRANSACTION be an appropriate choice?",
    "options": [
      "When you need simple counts by field",
      "When you need to group events into sessions based on start/end markers and time constraints, and you accept the performance cost",
      "When you want to accelerate a data model",
      "When you want to parse JSON"
    ],
    "answerIndex": 1,
    "explanation": "transaction can model sessions but is costly; alternatives like stats and streamstats may be better.",
    "discussion": "Use it deliberately when logic is otherwise complex.",
    "tags": [
      "transaction",
      "sessions"
    ],
    "difficulty": "hard",
    "createdAt": "2025-05-12",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-132",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which SPL command is used to enrich events by matching a field to a lookup table?",
    "options": [
      "lookup",
      "fields",
      "convert",
      "sistats"
    ],
    "answerIndex": 0,
    "explanation": "lookup matches event fields to a table to add enrichment (e.g., asset criticality).",
    "discussion": "fields selects fields; convert changes formats.",
    "tags": [
      "lookup",
      "enrichment"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-13",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-133",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "FOREACH in SPL is primarily used to:",
    "options": [
      "Loop over multiple fields and apply the same eval/operation to each",
      "Send results by email",
      "Create a report",
      "Accelerate indexes"
    ],
    "answerIndex": 0,
    "explanation": "foreach helps apply similar logic across many fields without repeating code.",
    "discussion": "It’s a convenience for SPL authoring.",
    "tags": [
      "foreach",
      "spl"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-14",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-134",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "A common ES/Splunk resource for SPL examples and security content guidance is:",
    "options": [
      "Splunk Lantern and Splunk Security Essentials",
      "Windows Event Viewer",
      "Wireshark",
      "Kali Linux"
    ],
    "answerIndex": 0,
    "explanation": "Lantern and SSE provide vetted guidance and examples tailored to Splunk use cases.",
    "discussion": "The others are useful tools but not Splunk content resources.",
    "tags": [
      "resources",
      "lantern",
      "sse"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-15",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-135",
    "domain": "5.0 SPL and Efficient Searching",
    "question": "Which is the BEST way to reduce the cost of repeated searches that summarize large datasets?",
    "options": [
      "Disable indexing",
      "Use summary indexing or data model acceleration + tstats where appropriate",
      "Use more wildcards",
      "Run searches more frequently"
    ],
    "answerIndex": 1,
    "explanation": "Summary techniques (summary indexing, acceleration) reduce repeated raw scans.",
    "discussion": "More frequent raw scans increase cost.",
    "tags": [
      "performance",
      "acceleration"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-16",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-136",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "Long-tail analysis in threat hunting typically focuses on:",
    "options": [
      "The most common events",
      "Rare or low-frequency events that may indicate suspicious behavior",
      "Only malware hashes",
      "Only firewall blocks"
    ],
    "answerIndex": 1,
    "explanation": "Long-tail hunting looks for the unusual/rare where attackers often hide.",
    "discussion": "It pairs well with baselining and outlier methods.",
    "tags": [
      "hunting",
      "long-tail"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-17",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-137",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "Outlier detection is primarily used to identify:",
    "options": [
      "Events that match a known IOC list",
      "Behavior that deviates significantly from baseline, which may merit investigation",
      "Only policy violations",
      "Only false positives"
    ],
    "answerIndex": 1,
    "explanation": "Outliers are deviations from normal behavior; they can be benign but are good hunting leads.",
    "discussion": "Add context before escalation.",
    "tags": [
      "outliers",
      "baseline"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-18",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-138",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "A good hypothesis-driven hunt statement looks like:",
    "options": [
      "'Let’s search everything'",
      "'If an attacker is using stolen credentials, we should see abnormal logons from new geolocations for high-value users'",
      "'Alerts are noisy'",
      "'Splunk is slow'"
    ],
    "answerIndex": 1,
    "explanation": "Hunts start with a testable hypothesis that maps to data and expected patterns.",
    "discussion": "Clear hypotheses reduce wasted search time.",
    "tags": [
      "hypothesis",
      "hunting"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-19",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-139",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "When should you use an Adaptive Response Action (or SOAR playbook) instead of manual steps?",
    "options": [
      "Never; automation is risky",
      "When the action is low-risk, repeatable, well-defined, and has clear guardrails/approvals",
      "Only during outages",
      "Only for password resets"
    ],
    "answerIndex": 1,
    "explanation": "Automation is valuable for repeatable tasks with controls to prevent harm.",
    "discussion": "High-impact actions should be gated or require approval.",
    "tags": [
      "soar",
      "automation"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-20",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-140",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "In Splunk SOAR, a playbook is best described as:",
    "options": [
      "A static PDF",
      "An automated workflow that chains actions/decisions across tools to respond to an event",
      "A Splunk index",
      "A data model"
    ],
    "answerIndex": 1,
    "explanation": "Playbooks orchestrate responses—enrichment, containment, ticketing, notifications—based on logic.",
    "discussion": "They can be triggered from ES via adaptive responses/integrations.",
    "tags": [
      "soar",
      "playbook"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-21",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-141",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "Long-tail analysis in threat hunting typically focuses on:",
    "options": [
      "The most common events",
      "Rare or low-frequency events that may indicate suspicious behavior",
      "Only malware hashes",
      "Only firewall blocks"
    ],
    "answerIndex": 1,
    "explanation": "Long-tail hunting looks for the unusual/rare where attackers often hide.",
    "discussion": "It pairs well with baselining and outlier methods.",
    "tags": [
      "hunting",
      "long-tail"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-22",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-142",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "Outlier detection is primarily used to identify:",
    "options": [
      "Events that match a known IOC list",
      "Behavior that deviates significantly from baseline, which may merit investigation",
      "Only policy violations",
      "Only false positives"
    ],
    "answerIndex": 1,
    "explanation": "Outliers are deviations from normal behavior; they can be benign but are good hunting leads.",
    "discussion": "Add context before escalation.",
    "tags": [
      "outliers",
      "baseline"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-23",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-143",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "A good hypothesis-driven hunt statement looks like:",
    "options": [
      "'Let’s search everything'",
      "'If an attacker is using stolen credentials, we should see abnormal logons from new geolocations for high-value users'",
      "'Alerts are noisy'",
      "'Splunk is slow'"
    ],
    "answerIndex": 1,
    "explanation": "Hunts start with a testable hypothesis that maps to data and expected patterns.",
    "discussion": "Clear hypotheses reduce wasted search time.",
    "tags": [
      "hypothesis",
      "hunting"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-24",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-144",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "When should you use an Adaptive Response Action (or SOAR playbook) instead of manual steps?",
    "options": [
      "Never; automation is risky",
      "When the action is low-risk, repeatable, well-defined, and has clear guardrails/approvals",
      "Only during outages",
      "Only for password resets"
    ],
    "answerIndex": 1,
    "explanation": "Automation is valuable for repeatable tasks with controls to prevent harm.",
    "discussion": "High-impact actions should be gated or require approval.",
    "tags": [
      "soar",
      "automation"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-25",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-145",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "In Splunk SOAR, a playbook is best described as:",
    "options": [
      "A static PDF",
      "An automated workflow that chains actions/decisions across tools to respond to an event",
      "A Splunk index",
      "A data model"
    ],
    "answerIndex": 1,
    "explanation": "Playbooks orchestrate responses—enrichment, containment, ticketing, notifications—based on logic.",
    "discussion": "They can be triggered from ES via adaptive responses/integrations.",
    "tags": [
      "soar",
      "playbook"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-26",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-146",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "Long-tail analysis in threat hunting typically focuses on:",
    "options": [
      "The most common events",
      "Rare or low-frequency events that may indicate suspicious behavior",
      "Only malware hashes",
      "Only firewall blocks"
    ],
    "answerIndex": 1,
    "explanation": "Long-tail hunting looks for the unusual/rare where attackers often hide.",
    "discussion": "It pairs well with baselining and outlier methods.",
    "tags": [
      "hunting",
      "long-tail"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-27",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-147",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "Outlier detection is primarily used to identify:",
    "options": [
      "Events that match a known IOC list",
      "Behavior that deviates significantly from baseline, which may merit investigation",
      "Only policy violations",
      "Only false positives"
    ],
    "answerIndex": 1,
    "explanation": "Outliers are deviations from normal behavior; they can be benign but are good hunting leads.",
    "discussion": "Add context before escalation.",
    "tags": [
      "outliers",
      "baseline"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-28",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-148",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "A good hypothesis-driven hunt statement looks like:",
    "options": [
      "'Let’s search everything'",
      "'If an attacker is using stolen credentials, we should see abnormal logons from new geolocations for high-value users'",
      "'Alerts are noisy'",
      "'Splunk is slow'"
    ],
    "answerIndex": 1,
    "explanation": "Hunts start with a testable hypothesis that maps to data and expected patterns.",
    "discussion": "Clear hypotheses reduce wasted search time.",
    "tags": [
      "hypothesis",
      "hunting"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-29",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-149",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "When should you use an Adaptive Response Action (or SOAR playbook) instead of manual steps?",
    "options": [
      "Never; automation is risky",
      "When the action is low-risk, repeatable, well-defined, and has clear guardrails/approvals",
      "Only during outages",
      "Only for password resets"
    ],
    "answerIndex": 1,
    "explanation": "Automation is valuable for repeatable tasks with controls to prevent harm.",
    "discussion": "High-impact actions should be gated or require approval.",
    "tags": [
      "soar",
      "automation"
    ],
    "difficulty": "medium",
    "createdAt": "2025-05-30",
    "updatedAt": "2025-08-06"
  },
  {
    "id": "SPLK5001-150",
    "domain": "6.0 Threat Hunting and Remediation",
    "question": "In Splunk SOAR, a playbook is best described as:",
    "options": [
      "A static PDF",
      "An automated workflow that chains actions/decisions across tools to respond to an event",
      "A Splunk index",
      "A data model"
    ],
    "answerIndex": 1,
    "explanation": "Playbooks orchestrate responses—enrichment, containment, ticketing, notifications—based on logic.",
    "discussion": "They can be triggered from ES via adaptive responses/integrations.",
    "tags": [
      "soar",
      "playbook"
    ],
    "difficulty": "easy",
    "createdAt": "2025-05-31",
    "updatedAt": "2025-08-06"
  }
];
