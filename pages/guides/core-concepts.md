---
layout: default
title: Core Concepts
toc: core-concepts
body_color: body-green
section_name: Core Concepts
last_updated: May 31st, 2019
icon_class: icon_documents_alt icon
---
# Overview
The diagram below shows an overview of how the various components relate to one another.

The components are:

- [Accounts](#accounts)
- [Tenants](#tenants)
- [API Keys](#api-keys)
- [Apps](#apps)
- [Reward Groups](#reward-groups)
- [Collection Schemes](#collection-schemes)
- [Payout Schemes](#payout-schemes)
- [Notifications](#webhooks)

<img src="/assets/images/guides/getting-started/concept-overview.png" style="width:900px;" title="Overview" alt="Overview"/>

## Accounts
As an organization which signed up to the Imburse Platform you will have been provided with a set up Account.

This Account is where Imburse will direct any invoices to in addition to using your Account contact details to connect with you.

Your Account is also the administrative root of your Imburse Platform and it will hold one or more of your [Tenants](#tenants).

## Tenants
You can consider a Tenant as either a company, department, or organization.

An [Account](#accounts) can have **multiple** Tenants.

A Tenant is where you will store configuration for:
- [Users](#users)
- [API Keys](#api-keys)
- [Apps](#apps)
- [Reward Groups](#reward-groups)
- [Collection Schemes](#collection-schemes)
- [Payout Schemes](#payout-schemes)
- [Notifications](#webhooks)

Tenants do not share information with each other and are a self contained and isolated entity within a multi-tenancy system.

## Users
Adding users to your Tenants gives them access to the Imburse Portal.
A user has one or more roles attributed to them and these roles govern their access level.

## API Keys
An API Key is a **Public and Private key set** and is used as a means of securing your request during the authentication process.
The API Key has one or more roles attributed to it and these roles govern the API Keys' API access.

**Account API Keys** can manage accounts and create and manage the Tenant API Keys.

**Tenant API Keys** can manage everything for the Tenant. ie, Apps, Schemes, etc.

## Marketplace
The Marketplace is the place to go to find, add, and configure the [Apps](#apps) for your Tenant.

## Apps
Apps are components that you can install and configure into your Tenant that provide capabilities for you customers such as collecting credit card or PayPal payments, or paying out rewards.

## Rewards
A reward is something you can give to your customers in recognition of an achievement; for example if a customer is deemed to have driven well, and makes no car insurance claims, they could be offered an Amazon Gift Card or a cash alternative. The Imburse platform offers hundreds of reward types from many different brands in most countries.

## Rewards Catalog
The Rewards Catalog is a searchable collection of [Rewards](#rewards) offered by Imburse via its partners.

The API has calls that allow you to view the items in the catalog, along with the details you will need for ordering and redeeming with the provider.

## Reward Groups
A Reward Group is a collection of one or more [Rewards](#rewards), curated by you. Multiple Rewards Groups can be created that can then be shared between your [Payout Schemes](#payout-schemes).

## Collection Schemes
A Collection Scheme is an arrangement of rules that dictate the collection payment options such as credit cards, PayPal, etc., available to your customers.

## Payout Schemes
A Payout Scheme is an arrangement of rules that dictate the payout options, such as rewards, that will be available to your customers.

## Webhooks
Webhooks, also known as Web Callbacks or an HTTP push API, is a way for an application to provide other applications with near real-time information.

Imburse uses Webhooks to provide you with near real-time notifications to your internal systems, such as when a payment is settled etc.

## Transactions
A Transaction holds order and instruction details that allow Imburse to collect or payout money on your behalf.
