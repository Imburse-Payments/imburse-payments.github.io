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
# What are Security Keys?
A Security Key is a **Public and Private key set** and is used as a means of securing your request during the authenticaion process.
The Security Key has one or more Roles attributed to it and these roles govern the Security Keys' capabilities.

Security Keys can be held by both [Accounts](/pages/guides/getting-started/what-is-an-account/) and [Tenants](/pages/guides/getting-started/what-is-a-tenant/).




#### What is an Account Security Key
At a high level, Account Security Keys have the ability to manage the Account and, in a **limited** capacity, manage the Tenants that the Account owns too.

The capabilies of an Account Security Key are dependent on the **Account Roles** that are assigned to it. The following table shows the **Account Roles** that are available:

Account Role Name | Description
-|-
`acc.r` | Account Management read access
`acc.a` | Account Management read + write access
`acc.key.r` | Security Key Management read access
`acc.key.a` | Security Key Management read + write access
`acc.t.r` | Tenant Management read access
`acc.t.a` | Tenant Management read + write access

An Account Security Key can have multiple roles assigned to it as are deemed necessary for the capabilities your require.

Some example scenarios are shown below but you can add which ever role combinations you require.

Scenario | Roles required
-|-
Administer new Tenants | `acc.t.a`
Administer new Tenants and Security Keys | `acc.t.a` and `acc.key.a`
Read Tenant and Tenant Security Keys only | `acc.t.r` and `acc.key.r`

**<mark>When your Account was initially setup you would have been provided with an Account Security Key</mark>**


#### What is a Tenant Security Key
Tenant Security Keys have the ability to manage everything for the Tenant.
The actual capabilies of a Tenant Security Key are dependent on the **Tenant Roles** that are assigned to it.

The following **Tenant Roles** are available:

Tenant Role Name | Description
-|-
`t.comp.a` | Tenant Information Management read + write access
`t.comp.r` | Tenant Information Management read access
`t.psp.r` | Provider Management read access
`t.psp.a` | Provider Management read + write access
`t.sch.r` | Scheme Management read access
`t.sch.a` | Scheme Management read + write access
`t.key.r` | Security Key Management read access
`t.key.a` | Security Key read + write access
`t.whk.r` | Webhook Management read access
`t.whk.a` | Webhook read + write access
`t.cat.r` | Catalog Management read access
`t.col.a` | Collection Management read + write access
`t.col.r` | Collection Management read access
`t.po.a` | Payout Management read + write access
`t.po.r` | Payout Management read access


A Tenant Security Key can have multiple roles assigned to it as are deemed necessary for the capabilities your require.

Some example scenarios are shown below but you can add which ever role combinations you require.

Scenario | Roles required 
-|-
Manage Schemes | `t.sch.a`
Manage Provider Configurations | `t.psp.a`
Read only access to Schemes | `t.sch.r`


#### Adding a Security Key
When adding a Security Key, the response from the API will contain the new Private Key value. This Private Key will only be issued once and should be stored securely.

When choosing the roles to apply to a Security Key, only select the minimum to satisfy the requirements of the Security Keys intented purpose.

This applies to both Account and Tenant Security Keys.



#### Revoking a Security Key
If a Security Key is no longer used or required, or if you know or suspect a Security Key has been compromised then you can delete the Security Key.
Access will be blocked immediately. 

This applies to both Account and Tenant Security Keys.



#### Multiple Security Keys
Both Accounts and Tenants can have multiple Security Keys attributed to them.

You should setup and use multiple Security Keys if you have many applications accessing the Imburse Platform. 

Multiple Security Keys will give you granular control over the capabilities the Keys have. 
For example one application my need to **create** Tenants whilst another may only need to **read** the Tenants.



#### Using a Security Key to Authenticate

**Diagram of authentication process**
Todo


#### What is an HMAC token?
Hash-based message authentication code (HMAC) is a mechanism for calculating a message authentication code involving a hash function in combination with a secret key. This can be used to verify the integrity and authenticity of a a message.

To use this form of authentication you utilise a public key and a private key, with both of these typically generated in an admin interface (more details below).

With HMAC authentication it signs the entire request, if the content-md5 is included, this basically guarantees the authenticity of the request. If a party in the middle fiddles with the API call either for malicious reasons, or bug in a intermediary proxy that drops some important headers,the signature will not match.


#### What is a Bearer token?
Todo

