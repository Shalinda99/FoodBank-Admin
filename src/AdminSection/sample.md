Start
├─ User selects money donation
│  ├─ Display donation options (predefined amounts or custom amount)
│  └─ User confirms the donation
│     ├─ Redirect to PayPal payment gateway
│     │  ├─ User enters card information
│     │  └─ User completes the payment
│     │     ├─ Payment successful
│     │     │  ├─ Assign points to the donor
│     │     │  └─ Save donation ID and amount to the database
│     │     └─ Payment failed
│     │        └─ Display error message
│     └─ Return to the application
└─ End
