---
layout: default
title: Core Concepts
toc: core-concepts
body_color: body-green
section_name: Core Concepts
last_updated: May 9th, 2019
icon_class: icon_documents_alt icon
---
# Overview
The diagram below shows an overview of how the various components relate to one another.

The components are:

- [Accounts](#accounts)
- [Tenants](#tenants)
- [Security Keys](#security-keys)
- [Marketplace](#marketplace)
- [Apps](#apps)
- [Voucher Groups](#voucher-groups)
- [Collecion Schemes](#collection-schemes)
- [Payout Schemes](#payout-schemes)
- [Notifications](#webhooks)

<img src="/assets/images/guides/getting-started/concept-overview.png" style="width:800px;" title="Overview" alt="Overview"/>

## Accounts
As an organisation signed up to the Imburse Platform you will have been setup with an Account.

This Account is where Imburse will direct any invoices to aswell as using your Account contact details to connect with you.

Your Account is also the administrative root of your Imburse Platform and it will hold one or more of your [Tenants](/pages/guides/getting-started/what-is-a-tenant/).

## Tenants
You can consider a Tenant as either a company, department, or organisation.

An [Account](#accounts) can have **multuple** Tenants.

**The diagram belows shows the relationship between an Account and its Tenants:**

A Tenant is where you will store configuration for:
[Security Keys](#security-keys)
- [Apps](#apps)
- [Collecion Schemes](#collection-schemes)
- [Payout Schemes](#payout-schemes)
- [Notifications](#webhooks)

Tenants do not share information with each other and are a self contained and isolated entity within a multi-tenancy system.

## Security Keys
A Security Key is a **Public and Private key set** and is used as a means of securing your request during the authenticaion process.
The Security Key has one or more roles attributed to it and these roles govern the Security Keys' API access.

**Account Security Keys** can manage accounts and create and manage tenant security keys.

**Tenant Security Keys** can manage everything for the Tenant. ie, Apps, Schemes, etc.

## Marketplace
The Marketplace is the place to go to find, add, and configure the [Apps](#apps) for your Tenant.

## Apps
Apps are components that you can install and configure into your Tenant that provide capabilities for you customers such as collecting credit card or PayPal payments, or paying out vouchers.

## Vouchers Catalog
The Vouchers Catalog is a searchable catalog of the vouchers offered by Imburse partners.

The API has calls that allow you to view the items in the catalog, along with the details you will need for ordering and redeeming with the provider.

## Voucher Groups
Voucher Groups allow you to create named groups of vouchers. These can then be referenced in your Payout Schemes.

## Collection Schemes
A Collection Scheme is an arrangement of Rules that dictate the collection payment options, credit cards, PayPal, etc., available to your customers.

## Payout Schemes
A Collection Scheme is an arrangement of Rules that dictate the payout options, such as vouchers, that will be available to your customers.

## Webhooks
Webhooks, also known as Web Callbacks or an HTTP push API, is a way for an application to provide other applications with near real-time information.

Imburse use Webhooks to provide you with near real-time notifications to your internal systems, such as when a payment is settled etc.

## Payment Orders
A Payment Order object holds a reference to your customers' purchase or payout reference such as an order number, plus it holds a collection or 1 or more [Payment Instructions](#payment-instruction).

## Payment Instructions
A Payment Instruction is an instruction to Imburse to collect or payout money and consists of a monetry amount, an open date, and a due date.

Multiple Payment Instructions can be added to an [Payment Order](#payment-order) to create a schedule of payments