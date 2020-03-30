<template>
  <v-row justify="center">
    <v-col sm="12" md="11" lg="9" xl="6">
      <h1>入力内容を空にしてボタンを押す</h1>
      <v-form ref="form">
        <template v-for="(field, index) in fields">
          <v-text-field
            :key="index"
            v-model="fields[index]"
            :rules="rules.required"
            :label="`フィールド ${index}`"
          ></v-text-field>
        </template>
        <v-btn dark rounded color="primary" block @click="post">
          バリデーション!
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(): any {
    return {
      fields: Array(20).fill('test'),
      rules: {
        required: [(v: string) => !!v || '必須入力の項目です']
      }
    };
  },
  methods: {
    post(): void {
      const form = this.$refs.form;
      if (!form.validate()) {
        const firstError = form.inputs.find((input: any) => input.hasError);
        this.$vuetify.goTo(firstError, { offset: 100 });
        return;
      }

      alert('(仮) POST します');
    }
  }
});
</script>
