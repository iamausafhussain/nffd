const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

//make payment
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
	const myPayment = await stripe.paymentIntents.create({
		amount: req.body.amount,
		currency: "inr",
		metadata: {
			company: "iShopify",
		},
	});

	res
		.status(200)
		.json({ success: true, client_secret: myPayment.client_secret });
});

//send stripe api key
exports.sendStripeAPIKey = catchAsyncErrors(async (res) => {
	res.status(200).json({ stripeApiKey: process.env.STRIPE_SECRET_KEY });
});
