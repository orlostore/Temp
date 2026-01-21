// ==========================================
// POLICIES CONTENT
// ==========================================

const policies = {
    shipping: `
        <h2>Shipping & Delivery</h2>
        <p>We currently deliver within the UAE.</p>
        <p>Orders are processed within 24–48 hours.</p>
        <p>Delivery timelines may vary based on location.</p>
    `,
    returns: `
        <h2>Returns & Refunds</h2>
        <p>Returns are accepted within 7 days of delivery.</p>
        <p>Items must be unused and in original packaging.</p>
        <p>Refunds are processed after inspection.</p>
    `,
    privacy: `
        <h2>Privacy Policy</h2>
        <p>We respect your privacy and only collect information
        necessary to process your order.</p>
        <p>Your data is never sold or shared with third parties.</p>
    `,
    terms: `
        <h2>Terms of Service</h2>
        <p>By placing an order, you agree to provide accurate information.</p>
        <p>ORLO reserves the right to refuse service if misuse is detected.</p>
    `
};

function openPolicy(type) {
    document.getElementById("policyText").innerHTML = policies[type];
    document.getElementById("policyModal").style.display = "block";
}

function closePolicy() {
    document.getElementById("policyModal").style.display = "none";
}
