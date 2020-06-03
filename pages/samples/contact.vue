<template>
  <v-row justify="center">
    <v-col sm="12" md="11" lg="9" xl="6">
      <h1>電話番号正規化</h1>
      <v-text-field
        v-model="tel"
        label="例: 090-1111-1111, 03(1111)1111, 全角・半角、ハイフン、カッコなど色々な形式"
      ></v-text-field>
      <v-btn dark rounded color="primary" block @click="normalize">
        ↓ 正規化 ↓
      </v-btn>
      <v-textarea v-model="normalized"></v-textarea>
    </v-col>
  </v-row>
</template>

<script>
export default {
  asyncData({ $contact }) {
    console.log($contact('117'));
  },
  data() {
    return {
      tel: '',
      normalized: ''
    };
  },
  methods: {
    normalize() {
      this.normalized = JSON.stringify(this.$contact(this.tel), null, 4);
    }
  }
};
</script>
