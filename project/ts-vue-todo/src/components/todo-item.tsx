import { Component, Prop, Watch, Emit, Vue } from 'vue-property-decorator';
import './index.less';
interface Item {
		text: string;
		complete: boolean;
}

@Component({
		name: 'TodoItem',
})
export default class TodoItem extends Vue {
		@Prop(Object) public item!: Item;
		@Prop(Number) public index!: number;
		@Prop(Number) public editingIndex!: number;

		public editingContent = '';

		@Watch('editingIndex')
		public editingChange(index) {
			if(index === this.index) {
				this.editingContent = this.item.text;
			} else {
				this.editingContent = '';
			}
		}

		// public save() {
		// 	this.$emit('on-save', {
		// 		index: this.index,
		// 		content: this.editingContent,
		// 	});
		// }

		@Emit('on-save')
		public save(index, content, event) {
			event.stopPropagation();
			return {
				index,
				content,
			}
		}

		public edit(event) {
			event.stopPropagation();
			this.$emit('on-edit', this.index);
		}

		public cancel(event) {
			event.stopPropagation();
			this.$emit('on-cancel');
		}

		@Emit('on-complete')
		public complete() {
			return this.index
		}

		protected render() {
			return (
				<li class="item-wrap">
					{
					this.editingIndex === this.index ? (
						<div>
							<a-input v-model={this.editingContent} style={{ width: '200px' }} />
							<a-icon type='check' nativeOn-click={this.save.bind(this,this.index,this.editingContent)}></a-icon>
							<a-icon type='close' nativeOn-click={this.cancel}></a-icon>
						</div>
					) : (
						<div>
							<span on-click={this.complete} style={this.item.complete ? { textDecoration: 'line-through' } : {}}>{this.item.text}</span>
							<a-icon type='edit' nativeOn-click={this.edit}></a-icon>
						</div>
					)
				}
				</li>
			);
		}
}
