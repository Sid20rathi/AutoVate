

# 🚀 AutoVate


## 🌟 Overview

AutoVate is a powerful automation platform that seamlessly triggers actions based on predefined events. Built for both simplicity and sophistication, it currently specializes in automated email dispatching and Solana transaction processing.

### Key Features

🎯 **Trigger-Based Automation**
- Define custom triggers for automatic action execution
- Real-time event monitoring and response

📧 **Smart Email Integration**
- Automated email notifications
- Customizable templates and content

💫 **Solana Integration**
- Automated blockchain transactions
- Secure wallet-to-wallet transfers

🛡️ **Enterprise-Ready**
- Scalable from individual to enterprise workflows
- Robust security measures

- **Backend Engine**: Node.js, Express.js, Prisma
- **Frontend Interface**: Next.js, Tailwind CSS
- **Blockchain Layer**: Solana Web3.js
- **Data Storage**: PostgreSQL
- **Email Service**: Brevo/SMTP
- **Queue Processing**: Kafka

## 🏗️ Project Architecture

```
autovate/
├── backend/          # Server & API infrastructure
├── frontend/         # User interface layer
├── hooks/           # Reusable logic modules
├── processor/       # Event processing engine
└── worker/          # Background task handler
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- Solana CLI tools
- npm or yarn

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Sid20rathi/AutoVate.git
   cd autovate
   ```

2. **Configure Environment**
   Create `.env` files in required directories:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password
   SOLANA_PRIVATE_KEY=your_solana_wallet_private_key
   ```

3. **Set Up Components**
   
   Navigate to each directory (`backend`, `frontend`, `hooks`, `processor`, `worker`) and run:
   ```bash
   npm install
   ```

4. **Database Setup** (Backend only)
   ```bash
   npx prisma migrate dev
   npx prisma generate
   npx prisma db seed
   ```

5. **Launch Services**
   ```bash
   # Start backend first
   cd backend && npm run dev

   # Then other services
   cd ../frontend && npm run dev
   cd ../hooks && npm run dev
   cd ../processor && npm run dev
   cd ../worker && npm run dev
   ```

   
📖 Usage
Define Triggers: Set specific conditions that will initiate an action.
Choose Actions:
Send an email to the specified user.
Execute a Solana transaction to the user's wallet.   

   




