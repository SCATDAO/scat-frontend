import * as monaco from 'monaco-editor'

export default {
    name: 'AuditTool',
    mounted() {
        const width = 888;
        const container = document.getElementById('code-layout');
        container.style.border = '1px solid #fff';
        const editor = monaco.editor.create(container, {
            value: "function hello() {\n\talert('Hello world!');\n}",
            language: "javascript",
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            wrappingStrategy: 'advanced',
            minimap: {
                enabled: true
            },
            overviewRulerLanes: 0
        });

        const updateHeight = () => {
            const contentHeight = Math.min(1000, editor.getContentHeight());
            container.style.width = `${width}px`;
            container.style.height = `${contentHeight}px`;
            try {
                editor.layout({ width, height: contentHeight });
            } finally {
                console.log()
            }
        };
        editor.onDidContentSizeChange(updateHeight);
        updateHeight();
    },
    data() {
        return {
            data: true,
        }
    }

};



