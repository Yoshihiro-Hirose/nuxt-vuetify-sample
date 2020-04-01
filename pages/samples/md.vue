<template>
  <v-row no-gutters>
    <v-col>
      <v-row align="start" justify="center" class="pt-1" no-gutters>
        <v-col>
          <h2>markdown本文</h2>
          <v-card outlined tile height="67vh" class="px-2">
            <v-textarea v-model="body" auto-grow solo flat> </v-textarea>
          </v-card>
        </v-col>
        <v-col>
          <h2>プレビュー</h2>
          <v-card outlined tile height="67vh" class="pa-2">
            {{ /* eslint-disable-next-line*/ }}
            <div class="markdown-body" v-html="$md.render(body)"></div>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data(): any {
    const body = `# 概要
markdown のサンプル

# リンクはどこで開く?
- https://google.com
- https://yahoo.co.jp
- https://github.com

# テーブル内で改行?

| 列1 | 列2 | 列3 |
| ---- | ---- | ---- |
| あい<br>うえお | かき<br>くけこ | さし<br>すせそ |
`;
    return {
      body
    };
  }
});
</script>
