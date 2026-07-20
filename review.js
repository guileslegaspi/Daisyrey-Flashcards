// 1. Core Mock Database Array
const dbMockFlashcards = [
    { 
        category: "Financial Accounting", 
        question: "What is the foundational Accounting Equation?", 
        answer: "Assets = Liabilities + Owner's Equity",
        explanation: "This equation must always balance because everything a business owns (Assets) was purchased either by borrowing money (Liabilities) or using the owner's own funds (Equity)."
    },
    { 
        category: "Managerial Accounting", 
        question: "What is a Fixed Cost?", 
        answer: "A cost that does not change in total regardless of activity levels.",
        explanation: "Even if production drops to zero, fixed costs remain the same. Examples include factory building rent, insurance policies, and executive salaries."
    },
    { 
        category: "GAAP Principles", 
        question: "What is the Matching Principle?", 
        answer: "Expenses must be recognized in the same period as the revenues they helped generate.",
        explanation: "This prevents companies from manipulating profits by delaying the recording of expenses to a future quarter. It is the cornerstone of accrual accounting."
    },
    { 
        category: "Financial Accounting", 
        question: "What is the difference between Accrual and Cash accounting?", 
        answer: "Accrual records activity when it happens; Cash records it when money changes hands.",
        explanation: "Accrual accounting focuses on when a service is provided or an asset is earned. Cash accounting only tracks the actual flow of physical money into or out of bank accounts."
    },
    { 
        category: "Cost Accounting", 
        question: "What is the formula for Break-Even Point in units?", 
        answer: "Fixed Costs ÷ Contribution Margin per Unit",
        explanation: "Contribution Margin per unit is calculated as (Selling Price per unit minus Variable Cost per unit). This tells a business exactly how many items they must sell to make $0 profit."
    },
    { 
        category: "Auditing", 
        question: "What is the Audit Risk Model equation?", 
        answer: "Audit Risk = Inherent Risk × Control Risk × Detection Risk",
        explanation: "Auditors look at how naturally risky an account is (Inherent) and whether internal company checks catch mistakes (Control) to determine how much deep testing they need to do themselves (Detection)."
    },
    { 
        category: "Financial Accounting", 
        question: "What are the four primary financial statements?", 
        answer: "Income Statement, Balance Sheet, Statement of Cash Flows, and Statement of Retained Earnings.",
        explanation: "Together, these four documents give a comprehensive picture of a company's profitability, financial health, cash movements, and equity value over time."
    },
    { 
        category: "Taxation", 
        question: "What is the MACRS method used for?", 
        answer: "Modified Accelerated Cost Recovery System is used for calculating tax depreciation.",
        explanation: "Unlike standard financial reporting, the IRS requires companies to write off assets faster in the early years of their lifespan using specific MACRS life classes (like 5-year or 7-year property)."
    },
    { 
        category: "Double-Entry", 
        question: "Which account types are increased by a Debit?", 
        answer: "Dividends, Expenses, and Assets (abbreviated as D.E.A.).",
        explanation: "Remember the acronym DEA / LOR. Debits increase Dividends, Expenses, and Assets. Credits increase Liabilities, Owner's Equity, and Revenue."
    },
    { 
        category: "GAAP Principles", 
        question: "What is the Conservatism Principle?", 
        answer: "When in doubt, choose the accounting method least likely to overstate assets and income.",
        explanation: "This rule dictates that potential losses should be recorded as soon as they are anticipated, but potential gains can only be recorded when they are fully realized."
    }
];

let currentIndex = 0;

// 2. DOM Elements
const clickArea = document.getElementById('flashcard-click-area');
const innerCard = document.getElementById('card-inner-element');
const categoryElement = document.getElementById('category');
const questionElement = document.getElementById('question-text');
const answerElement = document.getElementById('answer-text');
const explanationElement = document.getElementById('explanation-text');
const flipBtn = document.getElementById('flip-btn');
const nextBtn = document.getElementById('next-btn');
const counterElement = document.getElementById('counter');
const cardForm = document.getElementById('card-form');

// 3. Render Deck Logic
function updateDeckView() {
    if (dbMockFlashcards.length === 0) {
        categoryElement.textContent = "Empty";
        questionElement.textContent = "No cards available. Create one on the left!";
        answerElement.textContent = "";
        explanationElement.textContent = "";
        counterElement.textContent = "Card 0 of 0";
        return;
    }

    // Bring card back to front view instantly before updating text
    innerCard.classList.remove('is-flipped');
    
    // Set all text fields
    const currentCard = dbMockFlashcards[currentIndex];
    categoryElement.textContent = currentCard.category;
    questionElement.textContent = currentCard.question;
    answerElement.textContent = currentCard.answer;
    explanationElement.textContent = currentCard.explanation;
    counterElement.textContent = `Card ${currentIndex + 1} of ${dbMockFlashcards.length}`;
}

// 4. Action Handlers
function toggleCardFlip() {
    innerCard.classList.toggle('is-flipped');
}

clickArea.addEventListener('click', toggleCardFlip);
flipBtn.addEventListener('click', toggleCardFlip);

nextBtn.addEventListener('click', () => {
    if (dbMockFlashcards.length > 0) {
        currentIndex = (currentIndex + 1) % dbMockFlashcards.length;
        updateDeckView();
    }
});

// 5. Handling Form Submission
cardForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const newCat = document.getElementById('form-category').value.trim();
    const newQuest = document.getElementById('form-question').value.trim();
    const newAns = document.getElementById('form-answer').value.trim();
    const newExp = document.getElementById('form-explanation').value.trim();

    dbMockFlashcards.push({
        category: newCat,
        question: newQuest,
        answer: newAns,
        explanation: newExp
    });

    currentIndex = dbMockFlashcards.length - 1;
    cardForm.reset();
    updateDeckView();
});

// Start App
updateDeckView();