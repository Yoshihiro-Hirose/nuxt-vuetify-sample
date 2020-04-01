<template>
  <v-layout column justify-center align-center>
    <v-row xs12 sm8 md6>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: 'mdi-check-circle',
          title: 'フォームバリデーションエラー時のスクロール',
          to: '/samples/form-scroll'
        },
        {
          icon: 'mdi-language-markdown',
          title: 'markdown でリンクを別タブで開く、<br> で改行する',
          to: '/samples/md'
        }
      ]
    };
  }
};
</script>
