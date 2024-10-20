<template>
  <v-container class="pa-4 ml-4"> <!-- Отступ слева для контейнера -->
    <v-card class="mb-4 elevation-2" elevation="2">
      <v-card-title class="title">
        {{ companyName }}
      </v-card-title>
    </v-card>

    <v-card class="mb-4 elevation-2" elevation="2">
      <v-card-title class="score-title">
        Общий балл Zero-Trust: {{ ZeroTrustScore }}
      </v-card-title>
      <v-progress-linear
        :value="ZeroTrustScore"
        max="100"
        color="blue"
        class="progress-bar"
      ></v-progress-linear>
    </v-card>

    <v-card class="mb-4 elevation-2 ml-4" v-for="(value, key) in metrics" :key="key"> <!-- Отступ слева для карточек метрик -->
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
      >Категория риска: {{ riskCategory }}</v-card-title>
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
      if (this.ZeroTrustScore <= 50) return 'Высокий риск'; // Красный
      if (this.ZeroTrustScore <= 79) return 'Умеренный риск'; // Оранжевый
      return 'Низкий риск'; // Зеленый
    },
    riskAlertType() {
      if (this.ZeroTrustScore <= 50) return 'error'; // Высокий риск
      if (this.ZeroTrustScore <= 79) return 'warning'; // Умеренный риск
      return 'success'; // Низкий риск
    },
    riskColor() {
      if (this.ZeroTrustScore <= 50) return 'red'; // Высокий риск
      if (this.ZeroTrustScore <= 79) return 'orange'; // Умеренный риск
      return 'green'; // Низкий риск
    },
  },
  methods: {
    isNumeric(value) {
      return typeof value === 'number';
    },
    metricDescription(key) {
      const descriptions = {
        averageShannonEntropyScore: 'Средний балл Шеннона',
        firewallDetected: 'Обнаружен межсетевой экран',
        DNSsecEnabled: 'Включен DNSSEC',
        tlsVersion: 'Версия TLS',
        certificateBitStrength: 'Сила ключа сертификата',
        securityHeadersImplemented: 'Внедрены заголовки безопасности',
        openPortsDetected: 'Обнаруженные открытые порты',
      };
      return descriptions[key] || key;
    },
  },
};
</script>

<style scoped>
.v-container {
  background-color: #f5f5f5; /* Светлый фон для контраста */
  border-radius: 8px; /* Закругленные углы для карточек */
}

.v-card {
  background-color: white; /* Белый фон для карточек */
  border-radius: 8px; /* Закругленные углы для карточек */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Нежная тень для глубины */
}

.title {
  font-size: 20px; /* Больший размер шрифта для заголовков */
  font-weight: bold; /* Жирные заголовки */
  color: #333; /* Темный цвет для лучшей читаемости */
  margin-bottom: 10px; /* Отступ снизу для заголовков */
}

.score-title {
  font-size: 18px; /* Размер шрифта для общего балла */
  color: #333; /* Темный цвет для читаемости */
}

.metric-title {
  font-size: 16px; /* Немного больший размер шрифта для метрик */
  color: #555; /* Средний цвет для заголовков метрик */
}

.metric-value {
  display: flex; /* Гибкая компоновка для значений метрик */
  align-items: center; /* Центрирование по вертикали */
}

.progress-bar {
  height: 15px; /* Высота полос прогресса */
  border-radius: 5px; /* Закругленные углы для полос прогресса */
  margin-top: 5px; /* Отступ сверху для полос прогресса */
}

.v-alert {
  font-weight: bold; /* Жирный текст в оповещениях */
  font-size: 16px; /* Последовательный размер шрифта для текста оповещений */
}

.v-chip {
  margin-top: 5px; /* Отступ для чипов */
}
</style>
