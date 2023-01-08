<template>
  <div id="sidebar" class="active">
    <div class="p-relative">
      <div class="p-absolute">
        <span class="h3 text-dark sidebar-show d-lg-none d-block"><i class="mdi mdi-chevron-right"></i></span>
      </div>
    </div>

    <div class="sidebar-wrapper hide" id="s-menu">
      <div class="sidebar-header pb-0">
        <div class="d-flex justify-content-between">
          <div class="logo">
            <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="https://business.delegat.online/home"><img
                src="https://business.delegat.online/img/logo_delegat.svg" class="logo-header"></a>
          </div>
          <div class="toggler">
            <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
          </div>
        </div>
      </div>
      <div class="sidebar-menu">

        <ul class="menu pb-4">

        </ul>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>