---
layout: default
title: Getting Started
toc: getting_started
body_color: body-green
section_name: Guides
last_updated: April 12, 2019
icon_class: icon_documents_alt icon
---
# Collecting Payments
Collecting payments from a customer is configured through the Transactions API.

The Transactions API is capable of collecting a `direct payment` and also collecting a `schedule` of future payments.

A `Instruction` is composed of three components; a `Customer`, an `Order` and an `Instruction`. The relationship between these objects are one-to-many-to-many. That is one `Customer` can have many `Orders` and an `Order` can have many `Instructions`.

## Recurring Payments
If you wish to setup recurring payments on a schedule we recommend you opt for a single `Order`,representing a purchased product or agreement, with many `Instructions` dated according to your payment schedule.

This could be expressed as the following:

```
  Customer (John Doe)
    Order (Insurance Premium)
      01 Jan - Monthly bill - $50  
      01 Feb - Monthly bill - $50
      ...
      01 Dec - Final bill   - $68
```

In the above example, Imburse will attempt to take a payment from the customer on the given due dates.


## One Off Payments
When configuring one off payments, the same hierarchy as above is used albeit with only a single `Instruction`.
An `Instruction` can be added with a due date for the same day.

## Ad-hoc Payments
In this example, ad-hoc payments can be made against an order in a more unstructured way if required. 

For example a city car share scheme might look like the following.

```
  Customer (John Doe)
    Order (Signed agreement X)
      03 Jan - Compact Car - $12  
      19 Jan - Compact Car - $12
      03 Feb - Family Car  - $23
```

Orders are used to differentiate between customer agreements and for reporting purposes.

