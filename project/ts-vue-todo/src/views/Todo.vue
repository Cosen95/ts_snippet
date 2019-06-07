<template>
  <div class="todo-page">
    <ul>
     <todo-item 
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :index="index"
        :editingIndex="editingIndex"
        @on-save="handleSave"
        @on-edit="handleEdit"
        @on-cancel="handleCancel"
				@on-complete="handleComplete"
        ></todo-item>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/todo-item';

@Component({
	name: 'TodoPage',
	components: {
		TodoItem,
	},
})
export default class TodoPage extends Vue {
	public editingIndex = -1;
	public list = [
		{
			text: '学习<typescript全面解读>',
			complete: false,
		},
		{
			text: '学习<webpack4进阶>',
			complete: false,
		},
	];

	public handleSave({ index, content }) {
		this.list[index].text = content;
		this.handleCancel();
	}

	public handleEdit(index) {
		this.editingIndex = index;
	}

	public handleCancel() {
		this.editingIndex = -1;
	}

	public handleComplete(index) {
		this.list[index].complete = true;
	}
}
</script>
