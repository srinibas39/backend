const userModel = require('../Models/model');

const SK = "sk_test_51LGNXlSIT1aWny4EjGsMpHPPm2RtR6o99AG57j8KYGJpAX9kT76CD97Lef5dW0pJNsuNDunSoSZq12raz7r3EZyz00m15jNorS";
const stripe = require('stripe')(SK);

const createSession = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId);


        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            customer_email: user.email,
            client_refernce_id: user._id,
            line_items: [
                {
                    name: user.username,
                    description: user.email,
                    // deploy website 
                    amount: 100,
                    currency: "inr",
                    quantity: 1
                }
            ],
            // dev => http
            // production => https 
            success_url: `${req.protocol}://${req.get("host")}/cart`,
            cancel_url: `${req.protocol}://${req.get("host")}/cart`
        })
        res.status(200).json({
            status: "success",
            session
        })
    } catch (err) {
        res.status(500).json({
            err: err.message
        })
    }
}

module.exports = createSession;