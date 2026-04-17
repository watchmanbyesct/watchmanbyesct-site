---
title: "How to record a customer payment on an invoice"
description: "Apply cash or card receipts so AR aging and balances stay accurate."
order: 355
kind: how-to
updated: "2026-04-17"
---

Recording payments keeps **accounts receivable** aligned with bank deposits and client expectations.

### Before you start

- Locate the **invoice number** or **customer** record.
- Know the **payment amount**, **date**, and **method** (check, ACH, card, wire).

### Steps

1. Open **Finance → AR → Invoices** (or your tenant’s equivalent path).
2. Search for the **customer** or **invoice** and open the invoice in **open** or **partially paid** status.
3. Choose **Record payment**, **Receive payment**, or **Apply payment** (label varies).
4. Enter **amount** (may be partial), **date**, and **payment method**.
5. If your workflow uses **undeposited funds** or a **clearing account**, select the correct GL account per policy.
6. **Save** or **Post** the payment. Confirm the invoice balance moves to **paid** or **remaining balance** as expected.
7. If you need to **reverse** an entry, use your tenant’s reversal or credit-memo flow instead of deleting history.

### If amounts do not match

- Verify **tax** and **discount** lines were included in the payment allocation.
- Split payments across **multiple invoices** when the client sent one lump sum—use the multi-invoice payment tool if present.

### For operators

AR actions are permission-guarded server actions; audit logs record who posted the payment.
