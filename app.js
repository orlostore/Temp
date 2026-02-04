const WHATSAPP_NUMBER = "971XXXXXXXXX";

// === FREE DELIVERY THRESHOLD - Change this value to adjust ===
const FREE_DELIVERY_THRESHOLD = 75;

// === MAX QUANTITY PER PRODUCT ===
var MAX_QTY_PER_PRODUCT = MAX_QTY_PER_PRODUCT || 10;

const deliveryZones = {
    dubai: {
        name: "Dubai",
        nameAr: "Ø¯Ø¨ÙŠ",
        fee: 18,
        freeThreshold: FREE_DELIVERY_THRESHOLD
    },
    sharjah_ajman: {
        name: "Sharjah / Ajman",
        nameAr: "Ø§Ù„Ø´Ø§Ø±Ù‚Ø© / Ø¹Ø¬Ù…Ø§Ù†",
        fee: 18,
        freeThreshold: FREE_DELIVERY_THRESHOLD
    },
    abu_dhabi: {
        name: "Abu Dhabi",
        nameAr: "Ø£Ø¨Ùˆ Ø¸Ø¨ÙŠ",
        fee: 18,
        freeThreshold: FREE_DELIVERY_THRESHOLD
    },
    other: {
        name: "Other Emirates",
        nameAr: "Ø¥Ù…Ø§Ø±Ø§Øª Ø£Ø®Ø±Ù‰",
        fee: 18,
        freeThreshold: FREE_DELIVERY_THRESHOLD
    }
};

const DELIVERY_TIME = "2-5 business days";
const DELIVERY_TIME_AR = "Ù¢-Ù¥ Ø£ÙŠØ§Ù… Ø¹Ù…Ù„";

const policies = {
    shipping: `<h2>Shipping & Delivery</h2><h2 class="arabic-heading">Ø§Ù„Ø´Ø­Ù† ÙˆØ§Ù„ØªÙˆØµÙŠÙ„</h2><p><strong>Coverage:</strong> We currently deliver within the UAE only.</p><p class="arabic-text"><strong>Ø§Ù„ØªØºØ·ÙŠØ©:</strong> Ù†Ù‚ÙˆÙ… Ø­Ø§Ù„ÙŠØ§Ù‹ Ø¨Ø§Ù„ØªÙˆØµÙŠÙ„ Ø¯Ø§Ø®Ù„ Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© Ø§Ù„Ù…ØªØ­Ø¯Ø© ÙÙ‚Ø·.</p><p><strong>Processing Time:</strong> Orders are processed within 24â€“48 hours of payment confirmation.</p><p class="arabic-text"><strong>ÙˆÙ‚Øª Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬Ø©:</strong> ÙŠØªÙ… Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø·Ù„Ø¨Ø§Øª Ø®Ù„Ø§Ù„ Ù¢Ù¤-Ù¤Ù¨ Ø³Ø§Ø¹Ø© Ù…Ù† ØªØ£ÙƒÙŠØ¯ Ø§Ù„Ø¯ÙØ¹.</p><p><strong>Delivery Timeline:</strong> 2-5 business days for all locations.</p><p class="arabic-text"><strong>Ù…Ø¯Ø© Ø§Ù„ØªÙˆØµÙŠÙ„:</strong> Ù¢-Ù¥ Ø£ÙŠØ§Ù… Ø¹Ù…Ù„ Ù„Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…ÙˆØ§Ù‚Ø¹.</p><p><strong>Delivery Fees:</strong></p><p class="arabic-text"><strong>Ø±Ø³ÙˆÙ… Ø§Ù„ØªÙˆØµÙŠÙ„:</strong></p><ul><li><strong>All UAE:</strong> 18 AED (FREE on orders over ${FREE_DELIVERY_THRESHOLD} AED)</li><li class="arabic-text"><strong>Ø¬Ù…ÙŠØ¹ Ø£Ù†Ø­Ø§Ø¡ Ø§Ù„Ø¥Ù…Ø§Ø±Ø§Øª:</strong> Ù¡Ù¨ Ø¯Ø±Ù‡Ù… (Ù…Ø¬Ø§Ù†Ø§Ù‹ Ù„Ù„Ø·Ù„Ø¨Ø§Øª ÙÙˆÙ‚ ${FREE_DELIVERY_THRESHOLD} Ø¯Ø±Ù‡Ù…)</li></ul><p><strong>Tracking:</strong> You will receive tracking information via WhatsApp once your order ships.</p><p class="arabic-text"><strong>Ø§Ù„ØªØªØ¨Ø¹:</strong> Ø³ØªØªÙ„Ù‚Ù‰ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„ØªØªØ¨Ø¹ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨ Ø¨Ù…Ø¬Ø±Ø¯ Ø´Ø­Ù† Ø·Ù„Ø¨Ùƒ.</p>`,
    returns: `<h2>Returns & Refunds</h2><h2 class="arabic-heading">Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹ ÙˆØ§Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯</h2><p><strong>7-Day Return Window:</strong> Returns are accepted within 7 days of delivery only. No exceptions.</p><p class="arabic-text"><strong>ÙØªØ±Ø© Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹ Ù§ Ø£ÙŠØ§Ù…:</strong> ÙŠØªÙ… Ù‚Ø¨ÙˆÙ„ Ø§Ù„Ù…Ø±ØªØ¬Ø¹Ø§Øª Ø®Ù„Ø§Ù„ Ù§ Ø£ÙŠØ§Ù… Ù…Ù† Ø§Ù„ØªØ³Ù„ÙŠÙ… ÙÙ‚Ø·. Ø¨Ø¯ÙˆÙ† Ø§Ø³ØªØ«Ù†Ø§Ø¡Ø§Øª.</p><p><strong>Unopened Items Only:</strong> Items must be completely unused, unopened, and in original sealed packaging with all tags and seals intact.</p><p class="arabic-text"><strong>Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ØºÙŠØ± Ø§Ù„Ù…ÙØªÙˆØ­Ø© ÙÙ‚Ø·:</strong> ÙŠØ¬Ø¨ Ø£Ù† ØªÙƒÙˆÙ† Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ØºÙŠØ± Ù…Ø³ØªØ®Ø¯Ù…Ø© ØªÙ…Ø§Ù…Ø§Ù‹ØŒ ØºÙŠØ± Ù…ÙØªÙˆØ­Ø©ØŒ ÙˆÙÙŠ Ø§Ù„Ø¹Ø¨ÙˆØ© Ø§Ù„Ø£ØµÙ„ÙŠØ© Ø§Ù„Ù…ØºÙ„Ù‚Ø© Ù…Ø¹ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ù„ØµÙ‚Ø§Øª ÙˆØ§Ù„Ø£Ø®ØªØ§Ù… Ø³Ù„ÙŠÙ…Ø©.</p><p><strong>No Returns on Opened Items:</strong> Once opened, used, or packaging is damaged, items cannot be returned for any reason.</p><p class="arabic-text"><strong>Ù„Ø§ Ø¥Ø±Ø¬Ø§Ø¹ Ù„Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„Ù…ÙØªÙˆØ­Ø©:</strong> Ø¨Ù…Ø¬Ø±Ø¯ Ø§Ù„ÙØªØ­ Ø£Ùˆ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø£Ùˆ ØªÙ„Ù Ø§Ù„Ø¹Ø¨ÙˆØ©ØŒ Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø¥Ø±Ø¬Ø§Ø¹ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ù„Ø£ÙŠ Ø³Ø¨Ø¨.</p><p><strong>Return Shipping Costs:</strong> All return shipping costs are the buyer's responsibility. We do not provide prepaid return labels.</p><p class="arabic-text"><strong>ØªÙƒØ§Ù„ÙŠÙ Ø´Ø­Ù† Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹:</strong> Ø¬Ù…ÙŠØ¹ ØªÙƒØ§Ù„ÙŠÙ Ø´Ø­Ù† Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹ Ø¹Ù„Ù‰ Ø¹Ø§ØªÙ‚ Ø§Ù„Ù…Ø´ØªØ±ÙŠ. Ù„Ø§ Ù†ÙˆÙØ± Ù…Ù„ØµÙ‚Ø§Øª Ø¥Ø±Ø¬Ø§Ø¹ Ù…Ø¯ÙÙˆØ¹Ø© Ù…Ø³Ø¨Ù‚Ø§Ù‹.</p><p><strong>Inspection Required:</strong> All returns are inspected upon receipt. Items showing any signs of use, missing components, or damaged packaging will be rejected.</p><p class="arabic-text"><strong>Ø§Ù„ÙØ­Øµ Ù…Ø·Ù„ÙˆØ¨:</strong> ÙŠØªÙ… ÙØ­Øµ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ø±ØªØ¬Ø¹Ø§Øª Ø¹Ù†Ø¯ Ø§Ù„Ø§Ø³ØªÙ„Ø§Ù…. Ø³ÙŠØªÙ… Ø±ÙØ¶ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„ØªÙŠ ØªØ¸Ù‡Ø± Ø£ÙŠ Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø£Ùˆ Ù…ÙƒÙˆÙ†Ø§Øª Ù…ÙÙ‚ÙˆØ¯Ø© Ø£Ùˆ Ø¹Ø¨ÙˆØ© ØªØ§Ù„ÙØ©.</p><p><strong>Refund Process:</strong> Refunds are issued only after inspection confirms the item is unopened and undamaged. Processing takes 5-7 business days after we receive the return.</p><p class="arabic-text"><strong>Ø¹Ù…Ù„ÙŠØ© Ø§Ù„Ø§Ø³ØªØ±Ø¯Ø§Ø¯:</strong> ÙŠØªÙ… Ø¥ØµØ¯Ø§Ø± Ø§Ù„Ù…Ø¨Ø§Ù„Øº Ø§Ù„Ù…Ø³ØªØ±Ø¯Ø© ÙÙ‚Ø· Ø¨Ø¹Ø¯ Ø£Ù† ÙŠØ¤ÙƒØ¯ Ø§Ù„ÙØ­Øµ Ø£Ù† Ø§Ù„Ù…Ù†ØªØ¬ ØºÙŠØ± Ù…ÙØªÙˆØ­ ÙˆØºÙŠØ± ØªØ§Ù„Ù. ØªØ³ØªØºØ±Ù‚ Ø§Ù„Ù…Ø¹Ø§Ù„Ø¬Ø© Ù¥-Ù§ Ø£ÙŠØ§Ù… Ø¹Ù…Ù„ Ø¨Ø¹Ø¯ Ø§Ø³ØªÙ„Ø§Ù… Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹.</p><p><strong>Non-Returnable Items:</strong> Sale items, clearance items, items with damaged packaging, or items showing any signs of use are not eligible for return.</p><p class="arabic-text"><strong>Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª ØºÙŠØ± Ø§Ù„Ù‚Ø§Ø¨Ù„Ø© Ù„Ù„Ø¥Ø±Ø¬Ø§Ø¹:</strong> Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„ØªØ®ÙÙŠØ¶ØŒ Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„ØªØµÙÙŠØ©ØŒ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø°Ø§Øª Ø§Ù„Ø¹Ø¨ÙˆØ© Ø§Ù„ØªØ§Ù„ÙØ©ØŒ Ø£Ùˆ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„ØªÙŠ ØªØ¸Ù‡Ø± Ø£ÙŠ Ø¹Ù„Ø§Ù…Ø§Øª Ø§Ø³ØªØ®Ø¯Ø§Ù… ØºÙŠØ± Ù…Ø¤Ù‡Ù„Ø© Ù„Ù„Ø¥Ø±Ø¬Ø§Ø¹.</p><p><strong>How to Initiate a Return:</strong> Contact us via WhatsApp or email within 7 days of delivery with your order number and reason for return.</p><p class="arabic-text"><strong>ÙƒÙŠÙÙŠØ© Ø¨Ø¯Ø¡ Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹:</strong> Ø§ØªØµÙ„ Ø¨Ù†Ø§ Ø¹Ø¨Ø± ÙˆØ§ØªØ³Ø§Ø¨ Ø£Ùˆ Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ø®Ù„Ø§Ù„ Ù§ Ø£ÙŠØ§Ù… Ù…Ù† Ø§Ù„ØªØ³Ù„ÙŠÙ… Ù…Ø¹ Ø±Ù‚Ù… Ø·Ù„Ø¨Ùƒ ÙˆØ³Ø¨Ø¨ Ø§Ù„Ø¥Ø±Ø¬Ø§Ø¹.</p>`,
    privacy: `<h2>Privacy Policy</h2><h2 class="arabic-heading">Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø®ØµÙˆØµÙŠØ©</h2><p><strong>Information Collection:</strong> We collect only the information necessary to process and fulfill your order (name, phone number, delivery address, email).</p><p class="arabic-text"><strong>Ø¬Ù…Ø¹ Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª:</strong> Ù†Ø¬Ù…Ø¹ ÙÙ‚Ø· Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø§Ù„Ø¶Ø±ÙˆØ±ÙŠØ© Ù„Ù…Ø¹Ø§Ù„Ø¬Ø© ÙˆØªÙ†ÙÙŠØ° Ø·Ù„Ø¨Ùƒ (Ø§Ù„Ø§Ø³Ù…ØŒ Ø±Ù‚Ù… Ø§Ù„Ù‡Ø§ØªÙØŒ Ø¹Ù†ÙˆØ§Ù† Ø§Ù„ØªÙˆØµÙŠÙ„ØŒ Ø§Ù„Ø¨Ø±ÙŠØ¯ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ).</p><p><strong>Data Usage:</strong> Your information is used solely for order processing, delivery coordination, and customer support.</p><p class="arabic-text"><strong>Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª:</strong> ØªÙØ³ØªØ®Ø¯Ù… Ù…Ø¹Ù„ÙˆÙ…Ø§ØªÙƒ ÙÙ‚Ø· Ù„Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø·Ù„Ø¨Ø§ØªØŒ ÙˆØªÙ†Ø³ÙŠÙ‚ Ø§Ù„ØªÙˆØµÙŠÙ„ØŒ ÙˆØ¯Ø¹Ù… Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡.</p><p><strong>Third-Party Sharing:</strong> Your data is never sold or shared with third parties except for delivery partners who need your address to complete delivery.</p><p class="arabic-text"><strong>Ø§Ù„Ù…Ø´Ø§Ø±ÙƒØ© Ù…Ø¹ Ø£Ø·Ø±Ø§Ù Ø«Ø§Ù„Ø«Ø©:</strong> Ù„Ø§ ÙŠØªÙ… Ø¨ÙŠØ¹ Ø¨ÙŠØ§Ù†Ø§ØªÙƒ Ø£Ùˆ Ù…Ø´Ø§Ø±ÙƒØªÙ‡Ø§ Ù…Ø¹ Ø£Ø·Ø±Ø§Ù Ø«Ø§Ù„Ø«Ø© Ø£Ø¨Ø¯Ø§Ù‹ Ø¨Ø§Ø³ØªØ«Ù†Ø§Ø¡ Ø´Ø±ÙƒØ§Ø¡ Ø§Ù„ØªÙˆØµÙŠÙ„ Ø§Ù„Ø°ÙŠÙ† ÙŠØ­ØªØ§Ø¬ÙˆÙ† Ø¥Ù„Ù‰ Ø¹Ù†ÙˆØ§Ù†Ùƒ Ù„Ø¥ØªÙ…Ø§Ù… Ø§Ù„ØªÙˆØµÙŠÙ„.</p><p><strong>Data Security:</strong> We use secure communication channels (WhatsApp, encrypted email) to protect your information.</p><p class="arabic-text"><strong>Ø£Ù…Ù† Ø§Ù„Ø¨ÙŠØ§Ù†Ø§Øª:</strong> Ù†Ø³ØªØ®Ø¯Ù… Ù‚Ù†ÙˆØ§Øª Ø§ØªØµØ§Ù„ Ø¢Ù…Ù†Ø© (ÙˆØ§ØªØ³Ø§Ø¨ØŒ Ø¨Ø±ÙŠØ¯ Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ Ù…Ø´ÙØ±) Ù„Ø­Ù…Ø§ÙŠØ© Ù…Ø¹Ù„ÙˆÙ…Ø§ØªÙƒ.</p><p><strong>Your Rights:</strong> You may request deletion of your data at any time by contacting us.</p><p class="arabic-text"><strong>Ø­Ù‚ÙˆÙ‚Ùƒ:</strong> ÙŠÙ…ÙƒÙ†Ùƒ Ø·Ù„Ø¨ Ø­Ø°Ù Ø¨ÙŠØ§Ù†Ø§ØªÙƒ ÙÙŠ Ø£ÙŠ ÙˆÙ‚Øª Ø¹Ù† Ø·Ø±ÙŠÙ‚ Ø§Ù„Ø§ØªØµØ§Ù„ Ø¨Ù†Ø§.</p>`,
    terms: `<h2>Terms of Service</h2><h2 class="arabic-heading">Ø´Ø±ÙˆØ· Ø§Ù„Ø®Ø¯Ù…Ø©</h2><p><strong>Order Agreement:</strong> By placing an order, you agree to provide accurate information and accept these terms.</p><p class="arabic-text"><strong>Ø§ØªÙØ§Ù‚ÙŠØ© Ø§Ù„Ø·Ù„Ø¨:</strong> Ø¨ØªÙ‚Ø¯ÙŠÙ… Ø·Ù„Ø¨ØŒ ÙØ¥Ù†Ùƒ ØªÙˆØ§ÙÙ‚ Ø¹Ù„Ù‰ ØªÙ‚Ø¯ÙŠÙ… Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¯Ù‚ÙŠÙ‚Ø© ÙˆÙ‚Ø¨ÙˆÙ„ Ù‡Ø°Ù‡ Ø§Ù„Ø´Ø±ÙˆØ·.</p><p><strong>Payment:</strong> Full payment is required before order processing begins. We accept bank transfer and online payment methods.</p><p class="arabic-text"><strong>Ø§Ù„Ø¯ÙØ¹:</strong> ÙŠÙ„Ø²Ù… Ø§Ù„Ø¯ÙØ¹ Ø§Ù„ÙƒØ§Ù…Ù„ Ù‚Ø¨Ù„ Ø¨Ø¯Ø¡ Ù…Ø¹Ø§Ù„Ø¬Ø© Ø§Ù„Ø·Ù„Ø¨. Ù†Ù‚Ø¨Ù„ Ø§Ù„ØªØ­ÙˆÙŠÙ„ Ø§Ù„Ø¨Ù†ÙƒÙŠ ÙˆØ·Ø±Ù‚ Ø§Ù„Ø¯ÙØ¹ Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠ.</p><p><strong>Product Accuracy:</strong> We strive to display accurate product information and images. Actual products may vary slightly from images shown.</p><p class="arabic-text"><strong>Ø¯Ù‚Ø© Ø§Ù„Ù…Ù†ØªØ¬:</strong> Ù†Ø³Ø¹Ù‰ Ù„Ø¹Ø±Ø¶ Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ÙˆØµÙˆØ± Ø§Ù„Ù…Ù†ØªØ¬ Ø¨Ø¯Ù‚Ø©. Ù‚Ø¯ ØªØ®ØªÙ„Ù Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª Ø§Ù„ÙØ¹Ù„ÙŠØ© Ù‚Ù„ÙŠÙ„Ø§Ù‹ Ø¹Ù† Ø§Ù„ØµÙˆØ± Ø§Ù„Ù…Ø¹Ø±ÙˆØ¶Ø©.</p><p><strong>Right to Refuse Service:</strong> ORLO reserves the right to refuse or cancel any order if fraud, misuse, or policy violations are detected.</p><p class="arabic-text"><strong>Ø§Ù„Ø­Ù‚ ÙÙŠ Ø±ÙØ¶ Ø§Ù„Ø®Ø¯Ù…Ø©:</strong> ØªØ­ØªÙØ¸ Ø£ÙˆØ±Ù„Ùˆ Ø¨Ø§Ù„Ø­Ù‚ ÙÙŠ Ø±ÙØ¶ Ø£Ùˆ Ø¥Ù„ØºØ§Ø¡ Ø£ÙŠ Ø·Ù„Ø¨ ÙÙŠ Ø­Ø§Ù„Ø© Ø§ÙƒØªØ´Ø§Ù Ø§Ø­ØªÙŠØ§Ù„ Ø£Ùˆ Ø¥Ø³Ø§Ø¡Ø© Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø£Ùˆ Ø§Ù†ØªÙ‡Ø§ÙƒØ§Øª Ù„Ù„Ø³ÙŠØ§Ø³Ø©.</p><p><strong>Liability:</strong> ORLO is not responsible for delivery delays caused by courier services, incorrect addresses provided by customers, or force majeure events.</p><p class="arabic-text"><strong>Ø§Ù„Ù…Ø³Ø¤ÙˆÙ„ÙŠØ©:</strong> Ø£ÙˆØ±Ù„Ùˆ ØºÙŠØ± Ù…Ø³Ø¤ÙˆÙ„Ø© Ø¹Ù† ØªØ£Ø®ÙŠØ±Ø§Øª Ø§Ù„ØªÙˆØµÙŠÙ„ Ø§Ù„Ù†Ø§ØªØ¬Ø© Ø¹Ù† Ø®Ø¯Ù…Ø§Øª Ø§Ù„ØªÙˆØµÙŠÙ„ØŒ Ø£Ùˆ Ø§Ù„Ø¹Ù†Ø§ÙˆÙŠÙ† ØºÙŠØ± Ø§Ù„ØµØ­ÙŠØ­Ø© Ø§Ù„Ù…Ù‚Ø¯Ù…Ø© Ù…Ù† Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡ØŒ Ø£Ùˆ Ø£Ø­Ø¯Ø§Ø« Ø§Ù„Ù‚ÙˆØ© Ø§Ù„Ù‚Ø§Ù‡Ø±Ø©.</p><p><strong>Changes to Terms:</strong> We reserve the right to update these terms at any time. Continued use of our service constitutes acceptance of updated terms.</p><p class="arabic-text"><strong>Ø§Ù„ØªØºÙŠÙŠØ±Ø§Øª Ø¹Ù„Ù‰ Ø§Ù„Ø´Ø±ÙˆØ·:</strong> Ù†Ø­ØªÙØ¸ Ø¨Ø§Ù„Ø­Ù‚ ÙÙŠ ØªØ­Ø¯ÙŠØ« Ù‡Ø°Ù‡ Ø§Ù„Ø´Ø±ÙˆØ· ÙÙŠ Ø£ÙŠ ÙˆÙ‚Øª. Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„Ù…Ø³ØªÙ…Ø± Ù„Ø®Ø¯Ù…ØªÙ†Ø§ ÙŠØ´ÙƒÙ„ Ù‚Ø¨ÙˆÙ„Ø§Ù‹ Ù„Ù„Ø´Ø±ÙˆØ· Ø§Ù„Ù…Ø­Ø¯Ø«Ø©.</p><p><strong>Contact:</strong> For questions about these terms, contact us at info@orlostore.com</p><p class="arabic-text"><strong>Ø§Ù„Ø§ØªØµØ§Ù„:</strong> Ù„Ù„Ø§Ø³ØªÙØ³Ø§Ø±Ø§Øª Ø­ÙˆÙ„ Ù‡Ø°Ù‡ Ø§Ù„Ø´Ø±ÙˆØ·ØŒ Ø§ØªØµÙ„ Ø¨Ù†Ø§ Ø¹Ù„Ù‰ info@orlostore.com</p>`
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let upsellUsed = false;
let savedUpsellProducts = null;
let selectedCategory = "All Products";
let selectedDeliveryZone = localStorage.getItem("deliveryZone") || "dubai";

function saveCart() { localStorage.setItem("cart", JSON.stringify(cart)); }
function saveDeliveryZone() { localStorage.setItem("deliveryZone", selectedDeliveryZone); }
function getCategories() { return ["All Products", ...new Set(products.map(p => p.category))]; }
function calculateDeliveryFee(subtotal) { const zone = deliveryZones[selectedDeliveryZone]; if (subtotal >= zone.freeThreshold) { return 0; } return zone.fee; }
function getAmountUntilFreeDelivery(subtotal) { const zone = deliveryZones[selectedDeliveryZone]; if (subtotal >= zone.freeThreshold) { return 0; } return zone.freeThreshold - subtotal; }
function generateOrderNumber() { const date = new Date(); const year = date.getFullYear().toString().slice(-2); const month = String(date.getMonth() + 1).padStart(2, '0'); const day = String(date.getDate()).padStart(2, '0'); const random = Math.floor(Math.random() * 9000) + 1000; return `ORLO-${year}${month}${day}-${random}`; }

function getCategoryArabic(category) {
    if (category === "All Products") return "Ø¬Ù…ÙŠØ¹ Ø§Ù„Ù…Ù†ØªØ¬Ø§Øª";
    const product = products.find(p => p.category === category);
    return product && product.categoryAr ? product.categoryAr : '';
}

function renderProducts(list) { 
    const grid = document.getElementById("productsGrid"); 
    if (!list.length) { 
        grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#999;padding:3rem;">No products found</p>`; 
        return; 
    } 
    grid.innerHTML = list.map(p => {
        const isUrl = p.image && p.image.startsWith('http');
        const imageHTML = isUrl 
            ? `<img src="${p.image}" alt="${p.name}" style="max-width:100%; max-height:100%; object-fit:contain;">` 
            : p.image;
        
        // Check if out of stock
        const outOfStock = p.quantity === 0;
        
        return `
        <div class="product-card ${outOfStock ? 'out-of-stock' : ''}">
            ${p.featured ? `<span class="badge">Best Seller</span>` : ""}
            ${outOfStock ? `<span class="badge out-of-stock-badge">Out of Stock</span>` : ""}
            <a href="product.html?product=${p.slug}" style="text-decoration:none;">
                <div class="product-image">${imageHTML}</div>
            </a>
            <div class="product-info">
                <a href="product.html?product=${p.slug}" style="text-decoration:none; color:inherit;">
                    <h3 class="product-title">${p.name}</h3>
                    ${p.nameAr ? `<p class="product-title-ar">${p.nameAr}</p>` : ''}
                </a>
                <div class="product-price">AED ${p.price}</div>
                ${outOfStock 
                    ? `<button class="add-to-cart" disabled style="background:#999;cursor:not-allowed;">Out of Stock | Ù†ÙØ° Ø§Ù„Ù…Ø®Ø²ÙˆÙ†</button>` 
                    : `<button class="add-to-cart" onclick="addToCart(${p.id}, event)">Add to Cart | Ø£Ø¶Ù Ø¥Ù„Ù‰ Ø§Ù„Ø³Ù„Ø©</button>`
                }
            </div>
        </div>
    `}).join(""); 
}

function loadProducts(category = "All Products") { 
    selectedCategory = category; 
    const list = category === "All Products" ? products : products.filter(p => p.category === category); 
    renderProducts(list); 
    updateCategoryButtons(); 
    const heroSection = document.querySelector(".hero"); 
    const searchInput = document.getElementById("searchInput"); 
    if (heroSection && (!searchInput || !searchInput.value.trim())) { 
        heroSection.classList.remove("hidden"); 
    } 
}

function createCategoryFilters() { 
    const container = document.getElementById("categoryFilters"); 
    container.innerHTML = getCategories().map(cat => {
        const catAr = getCategoryArabic(cat);
        return `<button class="category-btn ${cat === selectedCategory ? "active" : ""}" onclick="loadProducts('${cat}')">${cat}${catAr ? `<br><span class="arabic-text category-arabic">${catAr}</span>` : ''}</button>`;
    }).join(""); 
}

function updateCategoryButtons() { 
    document.querySelectorAll(".category-btn").forEach(btn => { 
        const firstLine = btn.childNodes[0]; 
        if (firstLine && firstLine.textContent) { 
            const catText = firstLine.textContent.trim(); 
            btn.classList.toggle("active", catText === selectedCategory); 
        } 
    }); 
}

function searchProducts() { 
    const term = document.getElementById("searchInput").value.toLowerCase().trim(); 
    const heroSection = document.querySelector(".hero"); 
    if (!term) { 
        loadProducts(selectedCategory); 
        if (heroSection) heroSection.classList.remove("hidden"); 
        return; 
    } 
    if (heroSection) heroSection.classList.add("hidden"); 
    const scoped = selectedCategory === "All Products" ? products : products.filter(p => p.category === selectedCategory); 
    const results = scoped.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)); 
    renderProducts(results); 
}

function addToCart(id, event) { 
    const product = products.find(p => p.id === id);
    
    // Check stock
    if (product.quantity === 0) {
        return; // Silent - out of stock
    }
    
    const item = cart.find(i => i.id === id);
    const currentInCart = item ? item.quantity : 0;
    
    // Silent cap at 10 OR available stock (whichever is lower)
    const maxAllowed = Math.min(MAX_QTY_PER_PRODUCT, product.quantity);
    if (currentInCart >= maxAllowed) {
        return; // Silent - already at max
    }
    
    if (item) { 
        item.quantity++; 
    } else { 
        cart.push({ ...product, quantity: 1 }); 
    } 
    saveCart(); 
    updateCart(); 
    
    // Show grand popup
    showCartPopup(product);
}

function showCartPopup(product) {
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const productQty = cart.find(i => i.id === product.id)?.quantity || 1;
    
    // Get product image
    const isUrl = product.image && product.image.startsWith('http');
    const imageHTML = isUrl 
        ? `<img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:contain;">` 
        : `<span style="font-size:3rem;">${product.image || 'ðŸ“¦'}</span>`;
    
    const popup = document.getElementById('cartPopup');
    const popupContent = document.getElementById('cartPopupContent');
    
    popupContent.innerHTML = `
        <div class="popup-top">
            <button class="popup-close-btn" onclick="closeCartPopup()">âœ•</button>
            <div class="popup-success-badge">âœ“ Success!</div>
            <div class="popup-title">Added to Cart</div>
            <div class="popup-title-ar">ØªÙ…Øª Ø§Ù„Ø¥Ø¶Ø§ÙØ© Ù„Ù„Ø³Ù„Ø©</div>
        </div>
        <div class="popup-product-float">
            <div class="popup-product-card">
                <div class="popup-product-image">${imageHTML}</div>
                <div class="popup-product-details">
                    <div class="popup-product-name">${product.name}</div>
                    ${product.nameAr ? `<div class="popup-product-name-ar">${product.nameAr}</div>` : ''}
                    <div class="popup-product-price">AED ${product.price}</div>
                </div>
            </div>
        </div>
        <div class="popup-bottom">
            <div class="popup-cart-summary">
                <span class="popup-summary-label">Cart Total (${cartCount} ${cartCount === 1 ? 'item' : 'items'}):</span>
                <span class="popup-summary-value">AED ${cartTotal.toFixed(2)}</span>
            </div>
            <div class="popup-buttons">
                <button class="popup-btn-view-cart" onclick="closeCartPopup(); toggleCart();">
                    ðŸ›’ View Cart | <span class="arabic-text">Ø¹Ø±Ø¶ Ø§Ù„Ø³Ù„Ø©</span>
                </button>
                <button class="popup-btn-continue" onclick="closeCartPopup()">
                    Continue Shopping | <span class="arabic-text">Ù…ØªØ§Ø¨Ø¹Ø© Ø§Ù„ØªØ³ÙˆÙ‚</span>
                </button>
            </div>
        </div>
    `;
    
    popup.classList.add('active');
}

function closeCartPopup() {
    const popup = document.getElementById('cartPopup');
    popup.classList.remove('active');
}

function updateCart() {
    // *** FIX: Always sync cart from localStorage first ***
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const cartItems = document.getElementById("cartItems"); 
    const cartCount = document.getElementById("cartCount"); 
    const bottomCartCount = document.getElementById("bottomCartCount");
    const cartFooter = document.querySelector(".cart-footer");
    const cartCheckoutFixed = document.getElementById("cartCheckoutFixed");
    const isMobile = window.innerWidth <= 768;
    
    if (!cart.length) { 
        cartItems.innerHTML = "<p style='text-align:center;padding:3rem;color:#999;font-size:1.1rem;'>Your cart is empty</p>"; 
        if (cartCount) cartCount.textContent = 0;
        if (bottomCartCount) bottomCartCount.textContent = 0;
        cartFooter.innerHTML = `<div style="display: flex; justify-content: space-between; padding: 0.75rem 0 0.5rem; font-size: 1.1rem; font-weight: 700; color: #2c4a5c;"><span>Total / Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ:</span><span>AED 0.00</span></div>`;
        if (cartCheckoutFixed) cartCheckoutFixed.innerHTML = '';
        return; 
    } 
    
    const totalItems = cart.reduce((s, i) => s + i.quantity, 0); 
    const subtotal = cart.reduce((s, i) => s + i.price * i.quantity, 0); 
    const deliveryFee = calculateDeliveryFee(subtotal); 
    const total = subtotal + deliveryFee; 
    const amountNeeded = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
    
    if (cartCount) cartCount.textContent = totalItems;
    if (bottomCartCount) bottomCartCount.textContent = totalItems; 
    
    const checkoutBtnHTML = `
        <button id="stripeBtn" 
            style="width: 100%; padding: 0.9rem; font-size: 0.95rem; font-weight: 600; border: none; border-radius: 8px; cursor: pointer; background: #2c4a5c; color: white; transition: all 0.3s;" 
            onclick="checkout()" 
            onmouseover="this.style.background='#1e3545'" 
            onmouseout="this.style.background='#2c4a5c'">
            ðŸ’³ Pay with Card / Ø§Ù„Ø¯ÙØ¹ Ø¨Ø§Ù„Ø¨Ø·Ø§Ù‚Ø©
        </button>
    `;
    
    if (isMobile && cartCheckoutFixed) {
        cartCheckoutFixed.innerHTML = checkoutBtnHTML;
    } else if (cartCheckoutFixed) {
        cartCheckoutFixed.innerHTML = '';
    }
    
    cartItems.innerHTML = cart.map(i => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:0.5rem; border-bottom:1px solid #eee;">
            <div style="flex:1;">
                <strong style="font-size:0.9rem; color:#2c4a5c;">${i.name}</strong><br>
                <span style="color:#888; font-size:0.8rem;">AED ${i.price} Ã— ${i.quantity}</span><br>
                <span style="color:#e07856; font-weight:600; font-size:0.9rem;">AED ${(i.price * i.quantity).toFixed(2)}</span>
            </div>
            <div style="display:flex; gap:0.4rem; align-items:center;">
                <button onclick="updateQuantity(${i.id}, -1)" style="padding:0.3rem 0.6rem; background:#f0f0f0; border:none; border-radius:4px; cursor:pointer; font-size:0.85rem; font-weight:600;">-</button>
                <span style="font-size:0.9rem; font-weight:600; min-width:20px; text-align:center;">${i.quantity}</span>
                <button onclick="updateQuantity(${i.id}, 1)" style="padding:0.3rem 0.6rem; background:#f0f0f0; border:none; border-radius:4px; cursor:pointer; font-size:0.85rem; font-weight:600;">+</button>
                <button onclick="removeFromCart(${i.id})" style="padding:0.3rem 0.6rem; background:#dc3545; color:white; border:none; border-radius:4px; cursor:pointer; margin-left:0.3rem; font-size:0.85rem;">âœ•</button>
            </div>
        </div>
    `).join(""); 
    
    let footerHTML = '';
    
    const amountNeededForFree = FREE_DELIVERY_THRESHOLD - subtotal;
    const showUpsell = subtotal < FREE_DELIVERY_THRESHOLD && !(isMobile && upsellUsed);
    
    if (showUpsell) {
        const cartProductIds = cart.map(i => i.id);
        
        // Filter out-of-stock items from upsell
        const upsellProducts = products
            .filter(p => !cartProductIds.includes(p.id))
            .filter(p => p.quantity > 0) // Only in-stock items
            .filter(p => p.price >= amountNeededForFree)
            .sort((a, b) => a.price - b.price)
            .slice(0, 2);
        
        if (subtotal >= 60) {
            if (upsellProducts.length > 0) {
                footerHTML += `
                    <div style="padding: 0.75rem 1rem; background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 0.75rem;">
                        <div style="font-weight: 600; margin-bottom: 0.75rem; color: #2c4a5c; font-size: 0.9rem;">
                            Add AED ${amountNeededForFree.toFixed(0)} more for free delivery:
                        </div>
                        ${upsellProducts.map(p => `
                            <div style="display: flex; align-items: center; padding: 0.25rem 0; border-bottom: 1px solid #f0f0f0; gap: 0.5rem;">
                                <div style="flex: 1; font-weight: 500; color: #2c4a5c; font-size: 0.8rem;">${p.name}</div>
                                <div style="font-size: 0.75rem; color: #888; white-space: nowrap;">AED ${p.price}</div>
                                <button onclick="addUpsellItem(${p.id}, event)" style="padding: 0.25rem 0.5rem; background: #2c4a5c; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem;">Add</button>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
        } else {
            footerHTML += `
                <div style="padding: 0.75rem 1rem; background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 0.75rem;">
                    <div style="font-weight: 600; color: #2c4a5c; font-size: 0.9rem; margin-bottom: 0.5rem;">
                        ðŸšš Add AED ${amountNeededForFree.toFixed(0)} more to qualify for free delivery
                    </div>
                    ${upsellProducts.length > 0 ? `
                        <div style="cursor: pointer;" onclick="this.querySelector('.upsell-dropdown').style.display = this.querySelector('.upsell-dropdown').style.display === 'none' ? 'block' : 'none'; this.querySelector('.arrow').textContent = this.querySelector('.upsell-dropdown').style.display === 'none' ? 'â–¶' : 'â–¼';">
                            <span style="font-size: 0.8rem; color: #e07856; font-weight: 500;"><span class="arrow">â–¶</span> View suggestions</span>
                            <div class="upsell-dropdown" style="display: none; margin-top: 0.5rem;">
                                ${upsellProducts.map(p => `
                                    <div style="display: flex; align-items: center; padding: 0.25rem 0; border-bottom: 1px solid #f0f0f0; gap: 0.5rem;">
                                        <div style="flex: 1; font-weight: 500; color: #2c4a5c; font-size: 0.8rem;">${p.name}</div>
                                        <div style="font-size: 0.75rem; color: #888; white-space: nowrap;">AED ${p.price}</div>
                                        <button onclick="event.stopPropagation(); addUpsellItem(${p.id}, event)" style="padding: 0.25rem 0.5rem; background: #2c4a5c; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.75rem;">Add</button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }
    }
    
    if (subtotal >= FREE_DELIVERY_THRESHOLD) {
        savedUpsellProducts = null;
    }
    
    footerHTML += `
        <div style="padding: 1rem; background: #f8f9fa; border-radius: 8px; margin-bottom: 0.75rem;">
            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; font-size: 0.9rem; color: #2c4a5c;">
                <span>Subtotal / Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹ Ø§Ù„ÙØ±Ø¹ÙŠ:</span>
                <span>AED ${subtotal.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; font-size: 0.9rem; color: #2c4a5c;">
                <span>Delivery / Ø§Ù„ØªÙˆØµÙŠÙ„:</span>
                <span style="${deliveryFee === 0 ? 'color: #28a745; font-weight: 600;' : ''}">${deliveryFee === 0 ? 'FREE / Ù…Ø¬Ø§Ù†ÙŠ' : 'AED ' + deliveryFee.toFixed(2)}</span>
            </div>
            <div style="border-top: 2px solid #ddd; margin: 0.5rem 0;"></div>
            <div style="display: flex; justify-content: space-between; padding: 0.75rem 0 0.5rem; font-size: 1.1rem; font-weight: 700; color: #2c4a5c;">
                <span>Total / Ø§Ù„Ø¥Ø¬Ù…Ø§Ù„ÙŠ:</span>
                <span>AED ${total.toFixed(2)}</span>
            </div>
        </div>
    `;
    
    if (!isMobile) {
        footerHTML += `
            <div style="padding: 0 1rem 1rem;">
                ${checkoutBtnHTML}
            </div>
        `;
    }
    
    cartFooter.innerHTML = footerHTML;
}

function changeDeliveryZone(zone) { 
    selectedDeliveryZone = zone; 
    saveDeliveryZone(); 
    updateCart(); 
}

function updateQuantity(id, change) { 
    const item = cart.find(i => i.id === id);
    const product = products.find(p => p.id === id);
    
    if (item) { 
        const newQty = item.quantity + change;
        
        // Silent cap at 10 OR available stock (whichever is lower)
        if (change > 0) {
            const maxAllowed = Math.min(MAX_QTY_PER_PRODUCT, product ? product.quantity : MAX_QTY_PER_PRODUCT);
            if (newQty > maxAllowed) {
                return; // Silent - already at max
            }
        }
        
        item.quantity = newQty;
        if (item.quantity <= 0) { 
            removeFromCart(id); 
        } else { 
            saveCart(); 
            updateCart(); 
        } 
    } 
}

function removeFromCart(id) { 
    cart = cart.filter(i => i.id !== id); 
    upsellUsed = false;
    saveCart(); 
    updateCart(); 
}

function toggleCart() { 
    const cartSidebar = document.getElementById("cartSidebar");
    const bottomCartBtn = document.getElementById("bottomCartBtn");
    const bottomHomeBtn = document.getElementById("bottomHomeBtn");
    
    cartSidebar.classList.toggle("active");
    
    if (cartSidebar.classList.contains("active")) {
        if (bottomCartBtn) bottomCartBtn.classList.add("cart-active");
        if (bottomHomeBtn) bottomHomeBtn.classList.remove("home-active");
    } else {
        if (bottomCartBtn) bottomCartBtn.classList.remove("cart-active");
        if (bottomHomeBtn) bottomHomeBtn.classList.add("home-active");
        upsellUsed = false;
        savedUpsellProducts = null;
    }
    
    updateCart();
}

function addUpsellItem(id, event) {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        upsellUsed = true;
    }
    addToCart(id, event);
}

function openPolicy(type) { 
    document.getElementById("policyText").innerHTML = policies[type]; 
    document.getElementById("policyModal").style.display = "block"; 
    document.body.style.overflow = "hidden"; 
}

function closePolicy() { 
    document.getElementById("policyModal").style.display = "none"; 
    document.body.style.overflow = "auto"; 
}

function toggleAbout() {
    const aboutSection = document.getElementById('about');
    const computedStyle = window.getComputedStyle(aboutSection);
    const isVisible = computedStyle.display !== 'none';
    
    if (isVisible) {
        aboutSection.style.display = 'none';
    } else {
        aboutSection.style.display = 'block';
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    let overlay = document.querySelector('.mobile-menu-overlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay';
        overlay.innerHTML = `
            <div class="mobile-menu">
                <a href="#products" onclick="closeMobileMenu()"><span class="menu-en">ðŸ›ï¸ Shop</span> | <span class="menu-ar">ØªØ³ÙˆÙ‚</span></a>
                <a href="#about" onclick="closeMobileMenu()"><span class="menu-en">â„¹ï¸ About</span> | <span class="menu-ar">Ù…Ù† Ù†Ø­Ù†</span></a>
                <a href="#contact" onclick="closeMobileMenu()"><span class="menu-en">ðŸ“§ Contact</span> | <span class="menu-ar">Ø§ØªØµÙ„ Ø¨Ù†Ø§</span></a>
                <a href="#terms" onclick="closeMobileMenu()"><span class="menu-en">ðŸ“‹ Terms</span> | <span class="menu-ar">Ø§Ù„Ø´Ø±ÙˆØ·</span></a>
            </div>
        `;
        document.body.appendChild(overlay);
        
        overlay.onclick = (e) => {
            if (e.target === overlay) {
                closeMobileMenu();
            }
        };
    }
    
    overlay.classList.toggle('active');
}

function closeMobileMenu() {
    const overlay = document.querySelector('.mobile-menu-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

window.onload = () => { 
    // Only render products if they're already loaded (from cache in products.js)
    // Otherwise, the productsReady event will trigger the render
    if (typeof products !== 'undefined' && products.length > 0) {
        createCategoryFilters(); 
        loadProducts(); 
    }
    updateCart(); 
    
    // Listen for products ready event (fired by products.js when data arrives)
    window.addEventListener('productsReady', function(e) {
        console.log('📦 Products ready event received:', e.detail.count, 'products');
        createCategoryFilters();
        loadProducts();
        updateCart();
    });
    
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('showAbout') === 'true') {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.style.display = 'block';
            setTimeout(() => {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
    
    const searchTerm = urlParams.get('search');
    if (searchTerm) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = searchTerm;
            searchProducts();
        }
    }
    
    const promoBanner = document.querySelector('.mobile-promo-banner');
    if (promoBanner) {
        promoBanner.innerHTML = `ðŸšš Free delivery over AED ${FREE_DELIVERY_THRESHOLD} | <span class="arabic-text">ØªÙˆØµÙŠÙ„ Ù…Ø¬Ø§Ù†ÙŠ ÙÙˆÙ‚ ${FREE_DELIVERY_THRESHOLD} Ø¯Ø±Ù‡Ù…</span>`;
    }
    
    const heroThreshold = document.getElementById('heroThreshold');
    const heroThresholdAr = document.getElementById('heroThresholdAr');
    if (heroThreshold) heroThreshold.textContent = FREE_DELIVERY_THRESHOLD;
    if (heroThresholdAr) heroThresholdAr.textContent = FREE_DELIVERY_THRESHOLD;
    
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
        
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function() {
                hamburger.classList.remove("active");
                navLinks.classList.remove("active");
            });
        });
    }
    
    document.getElementById("searchBtn").onclick = searchProducts; 
    document.getElementById("searchInput").onkeypress = (e) => { 
        if (e.key === "Enter") { 
            e.preventDefault(); 
            searchProducts(); 
        } 
    }; 
    document.getElementById("cartIcon").onclick = toggleCart; 
    document.getElementById("closeCart").onclick = toggleCart; 
    document.getElementById("policyModal").onclick = (e) => { 
        if (e.target.id === "policyModal") { 
            closePolicy(); 
        } 
    };
    
    const bottomHomeBtn = document.getElementById("bottomHomeBtn");
    const bottomCartBtn = document.getElementById("bottomCartBtn");
    const bottomMenuBtn = document.getElementById("bottomMenuBtn");
    
    if (bottomHomeBtn) {
        bottomHomeBtn.classList.add("home-active");
        
        bottomHomeBtn.onclick = function() {
            const cartSidebar = document.getElementById("cartSidebar");
            if (cartSidebar.classList.contains("active")) {
                cartSidebar.classList.remove("active");
                if (bottomCartBtn) bottomCartBtn.classList.remove("cart-active");
                upsellUsed = false;
                savedUpsellProducts = null;
            }
            closeMobileMenu();
            bottomHomeBtn.classList.add("home-active");
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
    }
    
    if (bottomCartBtn) {
        bottomCartBtn.onclick = toggleCart;
    }
    
    if (bottomMenuBtn) {
        bottomMenuBtn.onclick = function() {
            const cartSidebar = document.getElementById("cartSidebar");
            if (cartSidebar.classList.contains("active")) {
                cartSidebar.classList.remove("active");
                if (bottomCartBtn) bottomCartBtn.classList.remove("cart-active");
                upsellUsed = false;
                savedUpsellProducts = null;
            }
            toggleMobileMenu();
        };
    }
};

async function checkout() {
    const btn = document.getElementById("stripeBtn");
    const originalText = btn ? btn.innerHTML : "Pay with Card";
    
    try {
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = "Checking stock...";
        }

        // Use relative URL (same domain)
        const response = await fetch('/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cart: cart,
                deliveryZoneKey: selectedDeliveryZone
            }),
        });

        const data = await response.json();

        if (data.error) {
            // Handle stock errors
            if (data.error === 'out_of_stock') {
                alert(data.message);
                // Refresh products to get updated stock
                if (typeof initProducts === 'function') {
                    initProducts();
                }
            } else if (data.error === 'insufficient_stock') {
                let msg = 'Stock issue:\n';
                data.items.forEach(item => {
                    msg += `${item.name}: Only ${item.available} available (you wanted ${item.requested})\n`;
                });
                alert(msg);
            } else {
                alert(data.message || 'Payment failed. Please try again.');
            }
            
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = originalText;
            }
            return;
        }

        if (data.url) {
            window.location.href = data.url; 
        } else {
            throw new Error('No URL');
        }

    } catch (err) {
        console.error("Payment Error:", err);
        alert("Payment system is syncing. Please try again.");
        if (btn) {
            btn.disabled = false;
            btn.innerHTML = originalText;
        }
    }
}
