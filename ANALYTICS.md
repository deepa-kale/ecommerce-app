# Business Insights Tracking Framework

This document defines the KPI framework designed for the SwimWear E-Commerce Platform. The site has not been deployed with live traffic, so no production data exists — this is a planning artifact that specifies **what** should be measured and **why**, so the platform could be instrumented against it if it were deployed.

## North Star KPI: Conversion Rate

    Conversion Rate = Completed Orders / Total Sessions

Conversion rate is the north star because it's the single number that reflects whether
the entire funnel — browsing, cart, checkout — is working. Every other metric below
exists to explain *why* conversion rate would move.

## Supporting Metrics

| Metric | Formula | What it diagnoses |
|---|---|---|
| Add-to-Cart Rate | Add-to-Cart Events / Product Page Views | Whether product pages and pricing are compelling enough to generate interest |
| Cart Abandonment Rate | (Carts Created − Completed Checkouts) / Carts Created | Whether friction (shipping cost, checkout flow, price shock) is blocking purchases after interest is shown |
| Average Order Value | Total Revenue / Completed Orders | Whether pricing, bundling, or upsell strategy is maximizing revenue per transaction |

## Why these three

Conversion rate alone tells you *that* something is wrong, not *where*. Splitting the
funnel into three stages isolates the failure point:

- High product views but low add-to-cart → demand/pricing problem on the product page
- High add-to-cart but high cart abandonment → friction problem in checkout, not demand
- Healthy conversion but low AOV → pricing/bundling opportunity, not a funnel problem

This is the same diagnostic logic used in retail pricing analytics: isolate whether a
metric shift is a demand issue or an execution issue before recommending a fix.

## Where each event would be captured

| Event | Trigger point in the existing app |
|---|---|
| Product view | Product detail page load |
| Add to cart | "Add to Cart" button click |
| Checkout started | User reaches the checkout page |
| Checkout completed | Order successfully submitted |

## Status

This is a design-stage framework, not a live dashboard. This document reflects the analytical thinking behind what would be measured and why, not an implemented feature.
