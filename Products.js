// ==========================================
// PRODUCTS DATA
// ==========================================
// Add new products here by copying the product object format
// Make sure each product has a unique id

const products = [
    {
        id: 1,
        name: "Cable Management Kit",
        description: "315-piece adhesive cable organizer",
        price: 65,
        category: "Workspace",
        image: "📦",
        featured: true
    },
    {
        id: 2,
        name: "Wireless Charging Stand",
        description: "Fast Qi charging stand",
        price: 120,
        category: "Phone Accessories",
        image: "📱",
        featured: true
    },
    {
        id: 3,
        name: "LED Strip Lights",
        description: "RGB smart LED strip (5m)",
        price: 95,
        category: "Home",
        image: "💡",
        featured: false
    },
    {
        id: 4,
        name: "Laptop Stand",
        description: "Adjustable aluminum stand",
        price: 110,
        category: "Workspace",
        image: "💻",
        featured: true
    },
    {
        id: 5,
        name: "Phone Car Mount",
        description: "Magnetic dashboard mount",
        price: 45,
        category: "Phone Accessories",
        image: "🚗",
        featured: false
    },
    {
        id: 6,
        name: "Desk Organizer",
        description: "Bamboo desktop storage",
        price: 85,
        category: "Workspace",
        image: "📋",
        featured: false
    },
    {
        id: 7,
        name: "Smart Plug",
        description: "WiFi-enabled power outlet",
        price: 55,
        category: "Home",
        image: "🔌",
        featured: false
    },
    {
        id: 8,
        name: "Portable Power Bank",
        description: "20000mAh fast charging",
        price: 130,
        category: "Phone Accessories",
        image: "🔋",
        featured: true
    }
];

const categoryTranslations = {
    "All Products": "جميع المنتجات",
    "Workspace": "مساحة العمل",
    "Phone Accessories": "إكسسوارات الهاتف",
    "Home": "المنزل"
};
