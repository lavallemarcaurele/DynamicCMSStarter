<template>
    <header>
        <nav class="bg-white">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="relative flex h-16 items-center justify-between">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <NuxtLink
                            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-white"
                            aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </NuxtLink>
                    </div>
                    <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div class="flex flex-shrink-0 items-center">
                            <NuxtLink to="/"><nuxt-img v-if="logoUrl" :src="logoUrl" alt="Logo" class="h-10" /></NuxtLink>
                        </div>
                        <div class="hidden sm:ml-6 sm:flex items-center">
                            <ul class="flex space-x-4">
                                <li v-for="link in links" :key="link.id">
                                    <NuxtLink :to="link.link"
                                        class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">{{
                                            link.label }}</NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:hidden" id="mobile-menu">
                <ul class="space-y-1 px-2 pb-3 pt-2">
                    <li v-for="link in links" :key="link.id">
                        <NuxtLink :to="link.link"
                            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 font-medium">
                            {{ link.label }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
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