<template>
  <VueformBuilder ref="builder"/>
</template>

<script>
import axios from 'axios';
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'VueFormAdmin',
  setup () {
    localStorage.removeItem('vueform-builder');
    localStorage.removeItem('vueform-history');
    const $q = useQuasar();
    const route = useRoute();
    const builder = ref(null);
    const API_URL_SAVE = '';
    const handleSave = async function (builderObject, history) {
      // builderObject - the object that should be saved to db (and loaded)
      // history - the array of previous builderObjects
      await axios.post(API_URL_SAVE, {

        formName: builderObject.builder.name,
        formData: builderObject,
        formHistory: history

      }).then((message) => {
        $q.notify({
          spinner: true,
          message: 'success',
          type: 'positive'
        });
      }).catch((error) => {
        $q.notify({
          spinner: true,
          message: error.toString(),
          type: 'negative'
        });
      });
    };
    onMounted(async () => {
      const load = {
        schema: {
          here: {
            name: 'here',
            type: 'text',
            label: 'Here\n',
            builder: {
              type: 'text'
            }
          },
          h1: {
            name: 'h1',
            type: 'static',
            content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
            builder: {
              type: 'h1'
            }
          },
          h1_1: {
            name: 'h1_1',
            type: 'static',
            content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
            builder: {
              type: 'h1'
            }
          },
          submit: {
            name: 'submit',
            type: 'button',
            buttonLabel: 'Submit',
            submits: true,
            builder: {
              type: 'submit'
            }
          },
          submit_1: {
            name: 'submit_1',
            type: 'button',
            buttonLabel: 'Submit',
            submits: true,
            builder: {
              type: 'submit'
            }
          },
          submit_2: {
            name: 'submit_2',
            type: 'button',
            buttonLabel: 'Submit',
            submits: true,
            builder: {
              type: 'submit'
            }
          },
          primaryButton: {
            name: 'primaryButton',
            type: 'button',
            buttonLabel: 'Button',
            builder: {
              type: 'primaryButton'
            }
          }
        },
        theme: [],
        form: {
          nesting: true
        },
        export: {
          output: 'inline',
          api: 'composition',
          theme: 'none'
        },
        builder: {
          name: 'ROTOP PERTECTOR'
        }
      };

      const history = [
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_1: {
              name: 'submit_1',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_1: {
              name: 'submit_1',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_2: {
              name: 'submit_2',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_1: {
              name: 'submit_1',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_2: {
              name: 'submit_2',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            secondaryButton: {
              name: 'secondaryButton',
              type: 'button',
              buttonLabel: 'Button',
              secondary: true,
              builder: {
                type: 'secondaryButton'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_1: {
              name: 'submit_1',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_2: {
              name: 'submit_2',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            secondaryButton: {
              name: 'secondaryButton',
              type: 'button',
              buttonLabel: 'Button',
              secondary: true,
              builder: {
                type: 'secondaryButton'
              }
            },
            primaryButton: {
              name: 'primaryButton',
              type: 'button',
              buttonLabel: 'Button',
              builder: {
                type: 'primaryButton'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        },
        {
          schema: {
            here: {
              name: 'here',
              type: 'text',
              label: 'Here\n',
              builder: {
                type: 'text'
              }
            },
            h1: {
              name: 'h1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            h1_1: {
              name: 'h1_1',
              type: 'static',
              content: '<h1 style="font-size: 36px; font-weight: 600; line-height: 1.5;">Lorem ipsum dolor</h1>',
              builder: {
                type: 'h1'
              }
            },
            submit: {
              name: 'submit',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_1: {
              name: 'submit_1',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            submit_2: {
              name: 'submit_2',
              type: 'button',
              buttonLabel: 'Submit',
              submits: true,
              builder: {
                type: 'submit'
              }
            },
            primaryButton: {
              name: 'primaryButton',
              type: 'button',
              buttonLabel: 'Button',
              builder: {
                type: 'primaryButton'
              }
            }
          },
          theme: [],
          form: {
            nesting: true
          },
          export: {
            output: 'inline',
            api: 'composition',
            theme: 'none'
          },
          builder: {
            name: 'ROTOP PERTECTOR'
          }
        }
      ];
      builder.value.load(load, history);
    });

    return {
      route,
      builder,
      handleSave
    };
  }
});

</script>
