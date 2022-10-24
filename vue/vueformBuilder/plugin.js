import { computed, onMounted, ref, toRefs } from 'vue';

const getElementSchemaByPath = (schema, path) => {
  if (!path) {
    return;
  }

  const pathParts = path.split('.');
  const pathLength = pathParts.length;

  const returnSchema = (schema, level = 1) => {
    const currentPath = pathParts[level - 1];

    if (pathLength === level) {
      return schema[currentPath];
    } else if (pathLength > level) {
      return returnSchema(schema[pathParts[level - 1]].schema, level + 1);
    }
  };

  return returnSchema(schema);
};

export default function () {
  return [
    () => ({
      config (config) {
        config.presets = {
          ...config.presets,
          horizontal: {
            replaceClasses: {
              ElementLabel: {
                container_sm: { 'form-pb-gutter/3-sm': 'vfb-util-props-horizontal-label-sm' },
                container_md: { 'form-pb-gutter/3': 'vfb-util-props-horizontal-label-md' },
                container_lg: { 'form-pb-gutter/3-lg': 'vfb-util-props-horizontal-label-lg' }
              }
            }
          },
          'not-horizontal': {
            replaceClasses: {
              ElementLabel: {
                container_sm: { 'vfb-util-props-horizontal-label-sm': 'vfb-util-props-not-horizontal-label-sm' },
                container_md: { 'vfb-util-props-horizontal-label-md': 'vfb-util-props-not-horizontal-label-md' },
                container_lg: { 'vfb-util-props-horizontal-label-lg': 'vfb-util-props-not-horizontal-label-lg' }
              }
            }
          },

          'props-form': {
            removeClasses: {
              FormElements: {
                container_sm: ['form-gap-y-gutter-sm']
              }
            },
            replaceClasses: {
              ToggleElement: {
                wrapper: {
                  'items-start': 'vfb-util-props-toggle-wrapper'
                }
              },
              TagsElement: {
                select: {
                  tag: {
                    'whitespace-nowrap': 'vfb-util-props-tags'
                  }
                }
              }
            },
            addClasses: {
              SliderElement: {
                container: 'vfb-props-slider'
              },
              ToggleElement: {
                container: 'vfb-props-toggle'
              },
              ListElement: {
                remove: 'vfb-props-list-remove'
              }
            }
          },
          'props-horizontal': {
            removeClasses: {
              ElementLabel: {
                container_sm: ['form-pb-gutter/3-sm'],
                container_md: ['form-pb-gutter/3'],
                container_lg: ['form-pb-gutter/3-lg']
              }
            },
            replaceClasses: {
              ElementLabel: {
                container: { 'items-start': 'vfb-util-props-horizontal-label' }
              }
            }
          },
          'prop-multiline': {
            replaceClasses: {
              ElementLabel: {
                container: {
                  'vfb-util-props-horizontal-label': 'vfb-util-props-multiline-label'
                }
              }
            }
          },
          separator: {
            addClasses: {
              ElementLayout: {
                container: 'vfb-util-props-separator'
              }
            }
          },
          'separator-top': {
            addClasses: {
              ElementLayout: {
                container: 'vfb-util-props-separator-top'
              }
            }
          },
          'prop-subtitle': {
            addClasses: {
              StaticElement: {
                container: 'vfb-util-props-subtitle'
              }
            }
          },
          'prop-subtitle-no-m': {
            addClasses: {
              StaticElement: {
                container: 'vfb-util-props-subtitle-no-m'
              }
            }
          },
          'prop-list-subtitle': {
            addClasses: {
              ElementLabel: {
                container: 'vfb-util-props-list-subtitle'
              }
            }
          },
          'prop-list': {
            addClasses: {
              ElementLabel: {
                container: 'vfb-util-props-list-label'
              },
              ListElement: {
                add: 'vfb-util-props-list-add'
              },
              ElementLayout: {
                container: 'vfb-util-props-list-layout'
              }
            },
            removeClasses: {
              ListElement: {
                listItem_sm: ['form-gap-gutter-sm']
              }
            }
          },
          'prop-list-object': {
            removeClasses: {
              ObjectElement: {
                wrapper_sm: ['form-gap-gutter-sm']
              }
            }
          },
          'prop-list-el': {
            removeClasses: {
              TextElement: {
                inputContainer: ['form-border-width-input'],
                inputContainer_sm: ['form-radius-input-sm'],
                inputContainer_default: ['form-bg-input', 'hover:form-bg-input-hover', 'focused:form-bg-input-focus', 'focused:form-ring'],
                inputContainer_success: ['form-bg-input-success', 'focused:form-ring']
              },
              TextareaElement: {
                inputContainer: ['form-border-width-input'],
                inputContainer_sm: ['form-radius-large-sm'],
                inputContainer_default: ['form-bg-input', 'hover:form-bg-input-hover', 'focused:form-bg-input-focus', 'focused:form-ring'],
                inputContainer_success: ['form-bg-input-success', 'focused:form-ring']
              },
              DateElement: {
                inputContainer: ['form-border-width-input'],
                inputContainer_sm: ['form-radius-input-sm'],
                inputContainer_default: ['form-bg-input', 'hover:form-bg-input-hover', 'focused:form-bg-input-focus', 'focused:form-ring'],
                inputContainer_success: ['form-bg-input-success', 'focused:form-ring']
              },
              SelectElement: {
                input: ['form-border-width-input'],
                input_sm: ['form-radius-input-sm'],
                input_default: ['form-bg-input', 'hover:form-bg-input-hover', 'focused:form-bg-input-focus', 'focused:form-ring'],
                input_success: ['form-bg-input-success', 'focused:form-ring'],
                select: {
                  container: ['form-border-width-input'],
                  container_sm: ['form-radius-input-sm'],
                  container_default: ['form-bg-input', 'hover:form-bg-input-hover', 'focused:form-bg-input-focus', 'focused:form-ring'],
                  container_success: ['form-bg-input-success', 'focused:form-ring']
                }
              },
              TagsElement: {
                select: {
                  container: ['form-border-width-input'],
                  container_sm: ['form-radius-input-sm'],
                  container_default: ['form-bg-input', 'hover:form-bg-input-hover', 'focused:form-bg-input-focus', 'focused:form-ring'],
                  container_success: ['form-bg-input-success', 'focused:form-ring']
                }
              }
            },
            addClasses: {
              TextElement: {
                inputContainer: 'vfb-util-props-list-el-input',
                inputContainer_default: 'vfb-util-props-list-el-input-default',
                inputContainer_success: 'vfb-util-props-list-el-input-success'
              },
              TextareaElement: {
                inputContainer: 'vfb-util-props-list-el-input',
                inputContainer_default: 'vfb-util-props-list-el-input-default',
                inputContainer_success: 'vfb-util-props-list-el-input-success'
              },
              DateElement: {
                inputContainer: 'vfb-util-props-list-el-input',
                inputContainer_default: 'vfb-util-props-list-el-input-default',
                inputContainer_success: 'vfb-util-props-list-el-input-success'
              },
              SelectElement: {
                input: 'vfb-util-props-list-el-select',
                input_default: 'vfb-util-props-list-el-select-default',
                input_success: 'vfb-util-props-list-el-select-success',
                select: {
                  container: 'vfb-util-props-list-el-select-container',
                  container_default: 'vfb-util-props-list-el-select-container-default',
                  container_success: 'vfb-util-props-list-el-select-container-success'
                }
              },
              TagsElement: {
                select: {
                  container: 'vfb-util-props-list-el-select-container',
                  container_default: 'vfb-util-props-list-el-select-container-default',
                  container_success: 'vfb-util-props-list-el-select-container-success'
                }
              }
            }
          },
          'prop-group': {
            addClasses: {
              GroupElement: {
                container: 'vfb-util-props-group'
              }
            }
          },
          colorpicker: {
            addClasses: {
              TextElement: {
                inputContainer: 'vfb-util-colorpicker-input'
              },
              ElementAddon: {
                container: 'vfb-util-colorpicker-addon'
              }
            }
          },
          number: {
            replaceClasses: {
              TextElement: {
                input_sm: {
                  'form-p-input-sm': 'vfb-util-number-input'
                }
              },
              ElementAddon: {
                container: {
                  'form-color-addon': 'vfb-util-number-addon'
                }
              }
            }
          },
          'tabs-outline': {
            overrideClasses: {
              RadiogroupRadio: {
                wrapper_selected: 'vfb-util-tabs-outline-selected',
                wrapper_unselected: 'vfb-util-tabs-outline-unselected'
              }
            }
          },
          'tabs-outline-gray': {
            overrideClasses: {
              RadiogroupRadio: {
                wrapper_selected: 'vfb-util-tabs-outline-gray-selected',
                wrapper_unselected: 'vfb-util-tabs-outline-gray-unselected'
              }
            }
          },
          'tabs-2': {
            addClasses: {
              RadiogroupElement: {
                wrapper: 'vfb-util-grid-cols-12'
              },
              RadiogroupRadio: {
                container: 'vfb-util-col-span-6'
              }
            }
          },
          'tabs-3': {
            addClasses: {
              RadiogroupElement: {
                wrapper: 'vfb-util-grid-cols-12'
              },
              RadiogroupRadio: {
                container: 'vfb-util-col-span-4'
              }
            }
          },
          'tabs-4': {
            addClasses: {
              RadiogroupElement: {
                wrapper: 'vfb-util-grid-cols-12'
              },
              RadiogroupRadio: {
                container: 'vfb-util-col-span-3'
              }
            }
          },
          'tabs-6': {
            addClasses: {
              RadiogroupElement: {
                wrapper: 'vfb-util-grid-cols-12'
              },
              RadiogroupRadio: {
                container: 'vfb-util-col-span-2'
              }
            }
          },
          'tabs-12': {
            addClasses: {
              RadiogroupElement: {
                wrapper: 'vfb-util-grid-cols-12'
              },
              RadiogroupRadio: {
                container: 'vfb-util-col-span-1'
              }
            }
          },
          'tabs-tiny': {
            replaceClasses: {
              RadiogroupRadio: {
                wrapper_sm: {
                  'form-text-sm': 'vfb-util-tabs-tiny'
                }
              },
              CheckboxgroupCheckbox: {
                wrapper_sm: {
                  'form-text-sm': 'vfb-util-tabs-tiny'
                }
              }
            }
          },
          'tabs-small': {
            replaceClasses: {
              RadiogroupRadio: {
                wrapper_sm: {
                  'form-text-sm': 'vfb-util-tabs-small'
                }
              }
            }
          }
        };

        return config;
      }
    }),
    () => ({
      apply: ['HiddenElement'],
      props: {
        classes: {
          required: false,
          type: Object,
          default: () => ({})
        },
        columnsClasses: {
          required: false,
          type: Object,
          default: () => ({
            container: 'col-span-12',
            innerContainer: 'col-span-12',
            wrapper: 'col-span-12'
          })
        },
        visible: {
          required: false,
          type: Boolean,
          default: true
        }
      }
    }),
    () => ({
      apply: ['Vueform'],
      props: {
        selectedElement: {
          required: false,
          type: String
        },
        dragging: {
          required: false,
          type: Boolean
        },
        builder: {
          required: false,
          type: Boolean,
          default: false
        },
        nesting: {
          required: false,
          type: Boolean,
          default: false
        },
        draggedSchema: {
          required: false,
          type: Object
        }
      }
    }),
    () => ({
      apply: ['FormElements', 'Vueform', 'GroupElement', 'ObjectElement'],
      emits: [
        'add-element', 'select-element', 'clone-element', 'remove-element', 'update-width', 'set-dragged-schema'
      ],
      props: {
        editorMode: {
          required: false,
          type: Boolean,
          default: false
        }
      },
      setup (props, context, component) {
        const handleAddElement = (path, position, schema, isNew) => {
          context.emit('add-element', path, position, schema, isNew);
        };

        const handleSelectElement = (path) => {
          context.emit('select-element', path);
        };
        const handleCloneElement = (path) => {
          context.emit('clone-element', path);
        };
        const handleRemoveElement = (path) => {
          context.emit('remove-element', path);
        };
        const handleUpdateWidth = (path, width) => {
          context.emit('update-width', path, width);
        };
        const handleSetDraggedSchema = (schema) => {
          context.emit('set-dragged-schema', schema);
        };

        return {
          ...component,
          handleAddElement,
          handleSelectElement,
          handleCloneElement,
          handleRemoveElement,
          handleUpdateWidth,
          handleSetDraggedSchema
        };
      }
    }),
    () => ({
      apply: /^[a-zA-Z]*Element$/,
      emits: ['update-element-name', 'add-element', 'select-element', 'clone-element', 'remove-element', 'update-width', 'set-dragged-schema'],
      props: {
        builder: {
          required: false,
          type: Object
        },
        droppable: {
          required: false,
          type: Boolean,
          default: true
        }
      },
      setup (props, context, component) {
        if (!component.form$.value.builder) {
          return component;
        }

        const { droppable } = toRefs(props);

        const highlighted = ref(false);

        const beingDragged = ref(false);

        const Droppable = computed(() => {
          return !beingDragged.value && droppable.value;
        });

        return {
          ...component,
          highlighted,
          beingDragged,
          Droppable
        };
      }
    }),
    () => ({
      apply: ['ObjectElement', 'GroupElement'],
      setup (props, context, component) {
        if (!component.form$.value.builder) {
          return component;
        }

        const nestingLevel = computed(() => {
          return component.el$.value.path.split('.').length - 1;
        });

        const hasHighlightedChild = computed(() => {
          if (['object', 'group'].indexOf(component.el$.value.type) === -1) {
            return false;
          }

          return !!component.el$.value.children$Array.find((e$) => {
            return ['before', 'after'].indexOf(e$.highlighted) !== -1;
          });
        });

        return {
          ...component,
          nestingLevel,
          hasHighlightedChild
        };
      }
    }),
    () => ({
      apply: 'ElementLayout',
      emits: [
        'add-element', 'select-element', 'clone-element', 'remove-element', 'update-width'
      ],
      setup (props, context, component) {
        if (!component.form$.value.builder) {
          return component;
        }

        const isSelected = computed(() => {
          return component.form$.value.selectedElement === component.el$.value.path;
        });

        const highlighted = computed({
          get () {
            return component.el$.value.highlighted;
          },
          set (val) {
            component.el$.value.highlighted = val;
          }
        });
        const hovered = ref(false);

        const DropAreaTop = ref(null);
        const DropAreaBottom = ref(null);
        const DropAreaMiddle = ref(null);

        const ElementHandle = ref(null);
        const ElementResizer = ref(null);

        const elementWidth = ref(null);
        const lastWidth = ref(0);

        const draggedSchema = ref({});
        const resizing = ref(false);

        const handleOverlayClick = () => {
          component.el$.value.$emit('select-element', component.el$.value.path);
        };

        const handleCloneClick = () => {
          component.el$.value.$emit('clone-element', component.el$.value.path);
        };

        const handleRemoveClick = () => {
          component.el$.value.$emit('remove-element', component.el$.value.path);
        };

        const handleDragOver = (e, position) => {
          e.preventDefault();

          if (!component.el$.value.Droppable) {
            return;
          }

          highlighted.value = position;
        };

        const handleDragLeave = (e) => {
          highlighted.value = null;
        };

        const handleDrop = (e, position) => {
          e.preventDefault();

          if (!component.el$.value.Droppable) {
            return;
          }

          highlighted.value = null;

          const schema = JSON.parse(e.dataTransfer.getData('schema'));
          const parent = e.dataTransfer.getData('parent') || undefined;

          component.el$.value.$emit('add-element', component.el$.value.path, position, schema, parent);
        };

        onMounted(() => {
          // Drop areas
          ElementHandle.value.addEventListener('dragstart', (e) => {
            component.el$.value.beingDragged = true;
            const schema = getElementSchemaByPath(component.form$.value.options.schema, component.el$.value.path);
            e.dataTransfer.setData('schema', JSON.stringify(schema));
            e.dataTransfer.setData('parent', component.el$.value.path.split('.').slice(0, -1).join('.') || '___VUEFORM___');
            component.el$.value.$emit('set-dragged-schema', schema);
          });

          ElementHandle.value.addEventListener('dragend', (e) => {
            component.el$.value.beingDragged = false;
          });

          DropAreaTop.value.addEventListener('dragover', e => handleDragOver(e, 'before'));
          DropAreaTop.value.addEventListener('dragleave', e => handleDragLeave(e));
          DropAreaTop.value.addEventListener('drop', e => handleDrop(e, 'before'));
          DropAreaBottom.value.addEventListener('dragover', e => handleDragOver(e, 'after'));
          DropAreaBottom.value.addEventListener('dragleave', e => handleDragLeave(e));
          DropAreaBottom.value.addEventListener('drop', e => handleDrop(e, 'after'));

          if (DropAreaMiddle.value) {
            DropAreaMiddle.value.addEventListener('dragover', e => handleDragOver(e, 'middle'));
            DropAreaMiddle.value.addEventListener('dragleave', e => handleDragLeave(e));
            DropAreaMiddle.value.addEventListener('drop', e => handleDrop(e, 'middle'));
          }

          // Resizing
          ElementResizer.value.addEventListener('dragstart', (e) => {
            lastWidth.value = 0;

            elementWidth.value = {
              from: e.path[1].getBoundingClientRect().x,
              to: e.path[1].getBoundingClientRect().x + e.path[2].getBoundingClientRect().width
            };
          });

          ElementResizer.value.addEventListener('drag', (e) => {
            const end = elementWidth.value.to - elementWidth.value.from;
            const current = e.x - elementWidth.value.from;
            let width = Math.round(current / end * 12);

            if (width < 1) {
              width = 1;
            }

            if (width > 12) {
              width = 12;
            }

            const formColumns = component.el$.value.form$.options.columns?.container || 12;

            if (width !== lastWidth.value && !(e.x === 0 && e.y === 0)) {
              lastWidth.value = width;

              const columns = component.el$.value.columns && typeof component.el$.value.columns === 'object'
                ? { ...component.el$.value.columns, container: width }
                : { container: width };

              if (width === 12 && width === formColumns) {
                lastWidth.value = null;
              }

              component.el$.value.updateColumns(columns);
            }
          });

          ElementResizer.value.addEventListener('dragstart', (e) => {
            resizing.value = true;
          });

          ElementResizer.value.addEventListener('dragend', (e) => {
            resizing.value = false;
            component.el$.value.$emit('update-width', component.el$.value.path, lastWidth.value);
          });
        });

        return {
          ...component,
          resizing,
          highlighted,
          hovered,
          draggedSchema,
          DropAreaTop,
          DropAreaBottom,
          DropAreaMiddle,
          ElementHandle,
          ElementResizer,
          isSelected,
          handleOverlayClick,
          handleCloneClick,
          handleRemoveClick
        };
      }
    })
  ];
}
