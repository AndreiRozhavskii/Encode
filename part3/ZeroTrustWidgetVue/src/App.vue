<template>
  <v-container class="pa-4 ml-4"> 
    <v-card class="mb-4 elevation-2" elevation="2">
      <v-card-title class="title">
        {{ companyName }}
      </v-card-title>
    </v-card>

    <v-card class="mb-4 elevation-2" elevation="2">
      <v-card-title class="score-title">
        Overall Zero-Trust Score: {{ ZeroTrustScore }}
      </v-card-title>
      <v-progress-linear
        :value="ZeroTrustScore"
        max="100"
        color="blue"
        class="progress-bar"
      ></v-progress-linear>
    </v-card>

    <v-card class="mb-4 elevation-2 ml-4" v-for="(value, key) in metrics" :key="key"> <!-- Left margin for metric cards -->
      <v-card-title class="metric-title">
        {{ metricDescription(key) }}:
      </v-card-title>
      <div class="metric-value">
        <span>
          {{ value }}
        </span>
        <v-progress-linear
          v-if="isNumeric(value)"
          :value="value"
          max="10"
          color="green"
          class="progress-bar"
        ></v-progress-linear>
        <v-icon v-else-if="value === true" color="green">mdi-check-circle</v-icon>
        <v-icon v-else-if="value === false" color="red">mdi-alert-circle</v-icon>
        <v-chip v-else>{{ value }}</v-chip>
      </div>
    </v-card>

    <v-card class="mt-4 elevation-2">
      <v-card-title
        class="title"
        :style="{ color: riskColor }"
      >Risk Category: {{ riskCategory }}</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      companyName: 'FinTechSecure Ltd.',
      ZeroTrustScore: 58.5,
      metrics: {
        averageShannonEntropyScore: 7.8,
        firewallDetected: true,
        DNSsecEnabled: true,
        tlsVersion: '1.2',
        certificateBitStrength: 2048,
        securityHeadersImplemented: ['X-XSS-Protection', 'X-Frame-Options'],
        openPortsDetected: 12,
      },
    };
  },
  computed: {
    riskCategory() {
      if (this.ZeroTrustScore <= 50) return 'High Risk'; 
      if (this.ZeroTrustScore <= 79) return 'Moderate Risk'; 
      return 'Low Risk';
    },
    riskAlertType() {
      if (this.ZeroTrustScore <= 50) return 'error'; 
      if (this.ZeroTrustScore <= 79) return 'warning'; 
      return 'success'; 
    },
    riskColor() {
      if (this.ZeroTrustScore <= 50) return 'red'; 
      if (this.ZeroTrustScore <= 79) return 'orange'; 
      return 'green'; 
    },
  },
  methods: {
    isNumeric(value) {
      return typeof value === 'number';
    },
    metricDescription(key) {
      const descriptions = {
        averageShannonEntropyScore: 'Average Shannon Entropy Score',
        firewallDetected: 'Firewall Detected',
        DNSsecEnabled: 'DNSSEC Enabled',
        tlsVersion: 'TLS Version',
        certificateBitStrength: 'Certificate Bit Strength',
        securityHeadersImplemented: 'Security Headers Implemented',
        openPortsDetected: 'Open Ports Detected',
      };
      return descriptions[key] || key;
    },
  },
};
</script>

<style scoped>
.v-container {
  background-color: #f5f5f5; 
  border-radius: 8px; 
}

.v-card {
  background-color: white; 
  border-radius: 8px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 20px; 
  font-weight: bold; 
  color: #333; 
  margin-bottom: 10px; 
}

.score-title {
  font-size: 18px; 
  color: #333;
}

.metric-title {
  font-size: 16px; 
  color: #555; 
}

.metric-value {
  display: flex; 
  align-items: center; 
}

.progress-bar {
  height: 15px; 
  border-radius: 5px; 
  margin-top: 5px; 
}

.v-alert {
  font-weight: bold; 
  font-size: 16px; 
}

.v-chip {
  margin-top: 5px; 
}
</style>
