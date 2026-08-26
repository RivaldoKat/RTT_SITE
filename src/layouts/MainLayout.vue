<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-black text-white">
      <!-- Top Information Bar -->
      <section class="bg-dark text-grey-4 row justify-between items-center q-px-md" style="height: 40px; font-size: 13px;">
        <div class="row q-gutter-x-md">
          <div class="cursor-pointer hover-text-white">
            <q-icon name="phone" class="q-mr-xs" /> +27 10 880 4744
          </div>
          <div class="cursor-pointer hover-text-white">
            <q-icon name="mail" class="q-mr-xs" /> enquiries@rematiptop.co.za
          </div>

        </div>
        <div class="row q-gutter-x-sm">
          <q-btn flat round dense icon="fas fa-linkedin" size="sm" />
          <q-btn flat round dense icon="fas fa-instagram" size="sm" />
          <q-btn flat round dense icon="fas fa-facebook-f" size="sm" />
        </div>
      </section>

      <!-- Main Navigation -->
      <section>
        <q-toolbar class="q-py-sm q-px-md">
          <q-toolbar-title>
            <!-- Replace with actual logo -->
            <div class="text-weight-bold text-h5 text-white">
              <img src="src/assets/RemaTipTopLogo.png" alt="Rema Tip Top Logo">
            </div>
          </q-toolbar-title>

          <q-space />

          <q-tabs align="right" active-color="red" indicator-color="transparent" class="text-grey-3">
            <q-route-tab to="/" label="Home" class="text-red"/>
              <q-btn-dropdown color="primary" label="About Rema Tip Top" hover aria-haspopup="menu" >
                <q-list role="menu">
                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Photos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Videos</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable v-close-popup>
                    <q-item-section>
                      <q-item-label>Articles</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            <q-route-tab to="/products" label="Products" />
            <q-route-tab to="/international" label="International" />
            <q-route-tab to="/contact" label="Contact Us" />
          </q-tabs>
        </q-toolbar>
      </section>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer mimicking the 3-column layout -->
    <q-footer class="bg-grey-10 text-grey-4 q-pa-xl">
      <div class="row q-col-gutter-lg">

        <!-- Column 1 -->
        <div class="col-12 col-md-4">
          <div class="text-h6 text-white q-mb-md">REMA TIP TOP Important Info</div>
          <q-list dense>
            <q-item clickable v-ripple class="q-px-none"><q-item-section>PAIA</q-item-section></q-item>
            <q-item clickable v-ripple class="q-px-none"><q-item-section>Rema Tip Top Privacy Policy</q-item-section></q-item>
            <q-item clickable v-ripple class="q-px-none"><q-item-section>T&C of Sale & Delivery</q-item-section></q-item>
            <q-item clickable v-ripple class="q-px-none"><q-item-section>T&C of Purchase</q-item-section></q-item>
            <q-item clickable v-ripple class="q-px-none"><q-item-section>T&C of Website Use</q-item-section></q-item>
          </q-list>
        </div>

        <!-- Column 2 -->
        <div class="col-12 col-md-4">
          <div class="text-h6 text-white q-mb-md">REMA TIP TOP Head Office</div>
          <div class="q-mb-sm">
            <strong>Physical Address:</strong><br>
            Corner Edinburgh (No.1) & Van Dyk Road, Benoni, 1501
          </div>
          <div class="q-mb-sm">
            <strong>Postal Address:</strong><br>
            Private Bag X 027, Benoni, 1500
          </div>
          <div class="q-mb-sm">
            <strong>Telephone:</strong><br>
            +27 10 880 4744
          </div>
        </div>

        <!-- Column 3 -->
        <div class="col-12 col-md-4">
          <div class="text-h6 text-white q-mb-md">REMA TIP TOP Manufacturing Branch</div>
          <div class="q-mb-sm">
            <strong>Physical Address:</strong><br>
            Induna Mills Road, Howick, 3290
          </div>
          <div class="q-mb-sm">
            <strong>Postal Address:</strong><br>
            Private Bag 29, Howick, 3290
          </div>
          <div class="q-mb-sm">
            <strong>Telephone:</strong><br>
            +27 (0) 33 239 7200
          </div>
        </div>

      </div>
    </q-footer>

  </q-layout>
</template>
