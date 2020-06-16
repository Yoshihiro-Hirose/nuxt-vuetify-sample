<template>
  <div class="container">
    <h1>🍞🔡 TOAST UI Grid + Vue</h1>
    <grid
      ref="grid1"
      :data="data1"
      :columns="gridProps1.columns"
      :options="gridProps1.options"
      :rowHeaders="gridProps1.rowHeaders"
      :columnOptions="gridProps1.columnOptions"
      @click="onClick"
      @check="onCheck"
      @uncheck="onUnCheck"
    ></grid>
    <div />
    <h1>範囲選択</h1>
    <grid
      ref="grid2"
      :data="data2"
      :columns="gridProps2.columns"
      :options="gridProps2.options"
    ></grid>
    <div class="mt-3">
      <v-btn dark rounded color="primary" @click="grid2MarkCell">
        範囲選択したセルを色付け
      </v-btn>
      <v-btn dark rounded color="primary" @click="grid2Clear">
        クリア
      </v-btn>
    </div>
  </div>
</template>

<script>
import 'tui-grid/dist/tui-grid.css';
import { Grid } from '@toast-ui/vue-grid';
export default {
  components: {
    grid: Grid
  },
  data() {
    return {
      data1: [
        {
          name: 'Kiss and Make Up',
          artist: 'Dua Lipa',
          score: '5'
        },
        {
          name: 'Bohemian Rhapsody',
          artist: 'Queen',
          score: '2'
        },
        {
          name: 'Done For Me',
          artist: 'Charlie Puth',
          score: '3'
        },
        {
          name: 'thank u, next',
          artist: 'Ariana Grande',
          score: '4'
        },
        {
          name: 'Handclap',
          artist: 'Fitz & The Tantrums',
          score: '1'
        },
        {
          name: 'Shape Of You',
          artist: 'Ed Sheeran',
          score: '5'
        },
        {
          name: 'Snowman',
          artist: 'Sia',
          score: '5'
        },
        {
          name: "Don't Stop Me Now ",
          artist: 'Queen',
          score: '3'
        },
        {
          name: 'Havana',
          artist: 'Camila Cabello',
          score: '2'
        },
        {
          name: 'A No No',
          artist: 'Mariah Carey',
          score: '5'
        }
      ],
      data2: [
        {
          col1: 'A',
          col2: 'B',
          col3: 'C',
          col4: 'D'
        },
        {
          col1: 'E',
          col2: 'F',
          col3: 'G',
          col4: 'H'
        },
        {
          col1: 'I',
          col2: 'J',
          col3: 'K',
          col4: 'L'
        },
        {
          col1: 'M',
          col2: 'N',
          col3: 'O',
          col4: 'P',
          _attributes: {
            className: {
              // Add class name on each columns
              column: {
                col4: ['blue'],
                col3: ['green']
              }
            }
          }
        }
      ]
    };
  },
  created() {
    this.gridProps1 = {
      rowHeaders: ['checkbox', 'rowNum'],
      columnOptions: {
        resizable: true,
        frozenCount: 1
      },
      columns: [
        {
          header: 'Name',
          name: 'name',
          editor: 'text'
        },
        {
          header: 'Artist',
          name: 'artist'
        },
        {
          header: 'Personal Score',
          name: 'score',
          onBeforeChange(ev) {
            console.log('executes before the value changes : ', ev);
          },
          onAfterChange(ev) {
            console.log('executes after the value has changed : ', ev);
          },
          copyOptions: {
            useListItemText: true
          },
          formatter: 'listItemText',
          editor: {
            type: 'radio',
            options: {
              listItems: [
                {
                  text: '★☆☆☆☆',
                  value: '1'
                },
                {
                  text: '★★☆☆☆',
                  value: '2'
                },
                {
                  text: '★★★☆☆',
                  value: '3'
                },
                {
                  text: '★★★★☆',
                  value: '4'
                },
                {
                  text: '★★★★★',
                  value: '5'
                }
              ]
            }
          }
        }
      ],
      options: {
        rowHeaders: ['checkbox']
      }
    };
    this.gridProps2 = {
      columnOptions: {
        resizable: true,
        frozenCount: 1
      },
      columns: [
        {
          header: '列1',
          name: 'col1',
          editor: 'text'
        },
        {
          header: '列2',
          name: 'col2',
          editor: 'text'
        },
        {
          header: '列3',
          name: 'col3',
          editor: 'text'
        },
        {
          header: '列4',
          name: 'col4',
          editor: 'text'
        }
      ]
    };
  },
  methods: {
    onClick(ev) {
      console.log('click event: ', ev);
      console.log('選択したセル');
      console.log(this.$refs.grid1);
      console.log(this.$refs.grid1.invoke('getSelectionRange'));
    },
    onCheck(ev) {
      console.log('check event: ', ev);
    },
    onUnCheck(ev) {
      console.log('uncheck event: ', ev);
    },
    grid2MarkCell() {
      this.grid2Clear();

      const gridColumns = this.$refs.grid2.invoke('getColumns');
      const range = this.$refs.grid2.invoke('getSelectionRange');

      const column = [];
      for (let j = range.start[1]; j <= range.end[1]; j++) {
        column[gridColumns[j].name] = ['blue'];
      }

      for (let i = range.start[0]; i <= range.end[0]; i++) {
        const row = this.data2[i];
        row._attributes = {
          className: {
            column
          }
        };
        this.$refs.grid2.invoke('setRow', row.rowKey, row);
      }
    },
    grid2Clear() {
      for (const row of this.data2) {
        delete row._attributes;
        this.$refs.grid2.invoke('setRow', row.rowKey, row);
      }
    }
  }
};
</script>

<style>
@import 'https://uicdn.toast.com/tui-grid/latest/tui-grid.css';
</style>
