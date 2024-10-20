import React from 'react';
import {
  Container,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
  Icon,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

const ZeroTrustScoreComponent = () => {
  const companyName = 'FinTechSecure Ltd.';
  const ZeroTrustScore = 58.5;
  const metrics = {
    averageShannonEntropyScore: 7.8,
    firewallDetected: true,
    DNSsecEnabled: true,
    tlsVersion: '1.2',
    certificateBitStrength: 2048,
    securityHeadersImplemented: ['X-XSS-Protection', 'X-Frame-Options'],
    openPortsDetected: 12,
  };

  const isNumeric = (value) => typeof value === 'number';

  const metricDescription = (key) => {
    const descriptions = {
      averageShannonEntropyScore: 'Average Shannon Score',
      firewallDetected: 'Firewall Detected',
      DNSsecEnabled: 'DNSSEC Enabled',
      tlsVersion: 'TLS Version',
      certificateBitStrength: 'Certificate Key Strength',
      securityHeadersImplemented: 'Security Headers Implemented',
      openPortsDetected: 'Open Ports Detected',
    };
    return descriptions[key] || key;
  };

  const riskCategory = () => {
    if (ZeroTrustScore <= 50) return 'High Risk'; 
    if (ZeroTrustScore <= 79) return 'Moderate Risk'; 
    return 'Low Risk'; 
  };

  const riskColor = () => {
    if (ZeroTrustScore <= 50) return 'red'; 
    if (ZeroTrustScore <= 79) return 'orange'; 
    return 'green'; 
  };

  return (
    <Container sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
      <Card sx={{ marginBottom: 4, elevation: 2 }}>
        <CardContent>
          <Typography variant="h5">{companyName}</Typography>
        </CardContent>
      </Card>

      <Card sx={{ marginBottom: 4, elevation: 2 }}>
        <CardContent>
          <Typography variant="h6" color="text.primary">
            Overall Zero-Trust Score: {ZeroTrustScore}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={ZeroTrustScore}
            max={100}
            color="primary"
            sx={{ height: 15, borderRadius: 1, marginTop: 1 }}
          />
        </CardContent>
      </Card>

      {Object.entries(metrics).map(([key, value]) => (
        <Card key={key} sx={{ marginBottom: 4, elevation: 2 }}>
          <CardContent>
            <Typography variant="subtitle1">{metricDescription(key)}:</Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {Array.isArray(value) ? (
                <span>{value.join(', ')}</span> 
              ) : (
                <span>{value}</span>
              )}
              {isNumeric(value) && (
                <LinearProgress
                  variant="determinate"
                  value={value}
                  max={10}
                  color="success"
                  sx={{ height: 10, borderRadius: 1, marginLeft: 1 }}
                />
              )}
              {value === true && (
                <Icon sx={{ color: 'green', marginLeft: 1 }}>
                  <CheckCircleIcon />
                </Icon>
              )}
              {value === false && (
                <Icon sx={{ color: 'red', marginLeft: 1 }}>
                  <ErrorIcon />
                </Icon>
              )}
              {!isNumeric(value) && !Array.isArray(value) && <Chip label={value} sx={{ marginLeft: 1 }} />}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card sx={{ marginTop: 4, elevation: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ color: riskColor() }}>
            Risk Category: {riskCategory()}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ZeroTrustScoreComponent;
