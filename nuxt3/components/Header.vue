<template>
    <header class="bg-white p-4 shadow-sm">
        <div class="container mx-auto flex justify-between items-center">
            <NuxtLink to="/"><nuxt-img v-if="logoUrl" :src="logoUrl" alt="Logo" class="h-10" /></NuxtLink>
            <nav>
                <ul class="flex space-x-4">
                    <li v-for="link in links" :key="link.id">
                        <NuxtLink :to="link.link">{{ link.label }}</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const logoUrl = ref('');
const links = ref([]);
const graphql = useStrapiGraphQL();

onMounted(async () => {
    try {
        const result = await graphql(`
        query {
            configuration {
                data {
                    attributes {
                        logo {
                            data {
                                attributes {
                                    url
                                }
                            }
                        }
                    }
                }
            }
            header {
                data {
                    attributes {
                        links {
                            label
                            link
                        }
                    }
                }
            }
        }
      `);
        const logoData = result.data.configuration.data.attributes.logo.data.attributes;
        const linksData = result.data.header.data.attributes.links;

        logoUrl.value = `http://localhost:1337${logoData.url}`;
        links.value = linksData;
    } catch (error) {
        console.error(error);
    }
});
</script>