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
# What is a Webhook?
Webhooks, also known as Web Callbacks or an HTTP push API, is a way for an application to provide other applications with near real-time information.

Imburse use Webhooks to allow us to provide real-time alerting to your systems. 

For example, you could create a webhook that will subscribe to `Payment Settled` event. Everytime that event occurs in the Imburse platform, Imburse will perform a callback to your specified webhook url.

We have many events that you can subscribe, all are documented in the [Webhook API documentation](https://api-docs.imbursepayments.com/#2d3ce1f5-408c-461c-ab73-f2ffb2f3cf35).
