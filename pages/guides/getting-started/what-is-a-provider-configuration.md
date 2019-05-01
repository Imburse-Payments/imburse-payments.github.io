---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 20, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started/authentication
nextsection_label: Authentication
---
# What is a Provider Configuration?
A Payment Service Provider (PSP) is whom you would traditionally integrate with to provide a payment service such as processing credit card payments or gift card rewards.

Imburse integrate with many Payment Service Providers:

- Braintree Payments
- Paydirekt
- Tango Card
- PayPal

We act as middleware between your internal systems and the providers you want to use. 

As such, you would need to create a **Provider Configuration** for each Payment Service Provider you want Imburse to connect and transact with on your behalf.



#### What does a Provider Configuration contain?
A Provider Configuration, in most cases, will hold a set of credentials that grant Imburse the permission to connect to the provider and transact on your behalf.

The exact information required will vary from Provider to Provider. For example, some may require a public and private key pair where as others may just need an account identifier and password. 

**The diagram below shows example Provider Configurations and how we connect to your providers:**


<img src="/assets/images/guides/getting-started/provider-configuration.png" style="width:600px;" title="Provider Configurations" alt="Provider Configurations"/>




#### How safe are my credentials
The credentials you supply in the Provider Configurations are stored in a secure storage...... **TBA**