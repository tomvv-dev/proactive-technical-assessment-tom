<template>
  <div class="py-8">
    <UContainer>
      <header class="border-b mb-8 py-2 text-xl">
        <h1>
          Welcome to the home page! This is where you can start building your app.
        </h1>
      </header>
      <div class="grid gap-2">
        <HomeButton to="/rick-and-morty" label="Rick and Morty" />
        <HomeButton to="/pokemon" label="Pokemon" />
      </div>
    </UContainer>
  </div>
</template>
