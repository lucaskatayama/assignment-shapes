<template>
  <div class="row">
    <nav class="col-md-3 d-none d-md-block bg-light sidebar px-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">About</h1>
      </div>
      <div class="sidebar-sticky">
        <ul class="nav flex-column">
          <router-link class="nav-item" tag="li" to="/about/app">
            <a class="nav-link">Application</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/about/math">
            <a class="nav-link">Geometry</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/about/tech">
            <a class="nav-link active">Technologies</a>
          </router-link>
          <router-link class="nav-item" tag="li" to="/about/author">
            <a class="nav-link active">Author</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <main class="col-md-9 ml-sm-auto col-lg-9 px-4" role="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.sidebar-sticky {
  position: relative;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
}

.sidebar .nav-link {
  font-weight: 500;
  color: #333;
}
.sidebar .active .nav-link {
  font-weight: 500;
  color: #007bff;
}
</style>
