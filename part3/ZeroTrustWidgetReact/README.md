
## Zero-Trust Score Widget

### Overview
The **Zero-Trust Score Widget** displays security metrics and provides a visual representation of a company's security risk using progress bars, icons, and a risk category.

### Features
- Displays an overall Zero-Trust score.
- Shows specific security metrics (e.g., firewall detection, TLS version, open ports, etc.).
- Uses Material-UI for progress bars and icons.
- Indicates risk category (Low, Moderate, High) with color coding.

### Requirements
- React v17+
- Material-UI (MUI v5)

### Installation and Setup

#### Step 1: Clone or Download the Widget
Clone or download the widget from the repository.

```bash
git clone https://github.com/your-repository/zero-trust-widget.git
```

#### Step 2: Install Dependencies
Navigate to the project directory and install the necessary dependencies.

```bash
cd zero-trust-widget
npm install
```

This will install **Material-UI (MUI)** and other required packages.

#### Step 3: Add the Widget to Your React Application
Copy the `ZeroTrustScoreComponent.js` file from the `src/components` folder into your React application.

#### Step 4: Install Required MUI Icons
Since the widget uses Material-UI icons, install the icon package:

```bash
npm install @mui/icons-material
```

#### Step 5: Integrate the Widget

1. Import the widget component into the desired file in your React project:

```jsx
import ZeroTrustScoreComponent from './components/ZeroTrustScoreComponent';
```

2. Render the widget in your component:

```jsx
function App() {
  return (
    <div className="App">
      <ZeroTrustScoreComponent />
    </div>
  );
}

export default App;
```

### Usage
By default, the widget will display the following:

- **Company Name**: Predefined as `FinTechSecure Ltd.`
- **Zero-Trust Score**: The score and visual progress bar.
- **Security Metrics**: Displays several security-related metrics, such as firewall detection and TLS version.
- **Risk Category**: Risk is categorized as "High", "Moderate", or "Low" based on the score.

### Customization
To customize the widget with your own data, modify the following variables in the `ZeroTrustScoreComponent.js`:

```javascript
const companyName = 'Your Company Name';
const ZeroTrustScore = 75; 
const metrics = {
  averageShannonEntropyScore: 8.2,
  firewallDetected: true,
  DNSsecEnabled: true,
  tlsVersion: '1.3',
  certificateBitStrength: 4096,
  securityHeadersImplemented: ['X-Content-Type-Options', 'X-Frame-Options'],
  openPortsDetected: 5,
};
```


