<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-2 shadow">
      <router-link class="navbar-brand col-sm-2 col-md-1 mr-0" to="/">
        <logo></logo> Shapes
      </router-link>
      <ul class="navbar-nav mr-auto flex-row">
        <router-link class="nav-item mr-4" tag="li" to="/">
          <a class="nav-link">Canvas</a>
        </router-link>
        <router-link class="nav-item mr-4" tag="li" to="/about">
          <a class="nav-link">About</a>
        </router-link>
      </ul>
    </nav>
    <div class="container-fluid p-t-2">
      <router-view/>
    </div>
  </div>
</template>


<script>
import Logo from "@/components/Logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss">
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~bootstrap/dist/css/bootstrap-grid.min.css";
@import "~bootstrap/dist/css/bootstrap-reboot.min.css";

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  padding: 48px 0 0;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);
}
.sidebar-sticky {
  position: sticky;
  top: 0;
  height: calc(100vh - 48px);
  padding-top: 0.5rem;
  overflow-x: hidden;
  overflow-y: auto;
}

[role="main"] {
  padding-top: 133px; /* Space for fixed navbar */
}

@media (min-width: 768px) {
  [role="main"] {
    padding-top: 48px; /* Space for fixed navbar */
  }
}
svg.logo {
  height: 30px;
  width: 30px;
  vertical-align: top;
}
</style>
