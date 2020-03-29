<script>
export default {
    name: 'tab-container',
    props: {
        panes: {
            type: Array,
            required: true
        }
    },
    render() {
        const panesContent = this.panes.map(p => {
            return p.active ? p.$slots.default : null;
        })
        return (
            <div class='tab-content'>
                {panesContent}
            </div>
        )
    }
}
</script>