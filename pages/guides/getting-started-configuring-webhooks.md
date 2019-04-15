---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 12, 2019
icon_class: icon_documents_alt icon
nextsection_url: /pages/guides/getting-started-collecting-payments
nextsection_label: Collecting Payments
---
# Configuring Webhooks

A webhook, also called a web callback or HTTP push API, is a way for an application to provide other applications with near real-time information.

You are able to configure webhooks through Imburse to allow us to provide real-time alerting to your systems. 
To create a webhook, use the following API call:

`POST /management/v1/notifications/webhooks`

For example, you could create a webhook that will subscribe to a `Payment Settled` event. Everytime that event occurs within the Imburse platform, Imburse will perform a callback to your specified webhook url.

More information can be found in our [WebHook API Documentation](https://api-docs.imbursepayments.com/#2d3ce1f5-408c-461c-ab73-f2ffb2f3cf35).
