---
slug: introduction
title: Introduction
# authors: [natarajan]
tags: [azure, aws, gcp, dotnet, rust, java, ansible, nginx, nodejs]
sidebar_position: 1
---


## Identiy Provider

1. [Casbin](https://casbin.org/en/)
2. [Identity Server 4](https://identityserver4.readthedocs.io/en/latest/)
3. Keycloak
4. [Azure Active Directory](https://docs.microsoft.com/en-us/azure/active-directory-b2c/enable-authentication-web-api)

## Identity Broker

1. [Dex](https://github.com/dexidp/dex)

## Cloud & Tools


| Name          | Azure                 | AWS       | GCP       | Cloud Agnostic                      |
| -------       | -----------           |---------  |------     | ------                              |
| Authentication| Azure AD                                    ||| KeyClock, Casbin,                   |
|^^             |                       |           |           | IdentityServer 4                    |
|                               Infrastructure Monitoring                                          ||||
| Monitoring    | Monitor               |           |           | Promatheus                          |
|                               Application Monitoring                                             ||||
| Logging       | Application Insights  |           |           | Promatheus                          |
| ^^            |                       |           |           | Zipkin                              |
| -------       | -----------           |---------  |------     | ------                              |




Metric / Dimension	Keycloak	Logto	Casdoor	Authelia
Tech Stack	Java / Quarkus	Node.js / TypeScript	Go (Golang) / React	Go (Golang) / React
Primary Architecture	Enterprise IdP (OIDC/SAML)	CIAM / Auth0-alternative	IAM & SSO multi-protocol	Reverse proxy Forward-Auth
Minimum Hardware	2 vCPU, 2–4 GB RAM	1 vCPU, 1–2 GB RAM	1 vCPU, 512 MB–1 GB RAM	0.5 vCPU, 128–256 MB RAM
Feature Set (out of 10)	9.5 / 10	8.5 / 10	8.5 / 10	5.5 / 10
Performance (Throughput)	8.5 / 10	8.0 / 10	9.0 / 10	9.5 / 10
Resource Efficiency	5.5 / 10	7.5 / 10	9.0 / 10	10 / 10
Hardware Demands	Heavy	Moderate	Light	Minimal
Overall Score	8.4 / 10	8.2 / 10	8.6 / 10	7.0 / 10


## DevOps

1. [90 Days of DevOps](https://github.com/michaelcade/90daysofdevops)