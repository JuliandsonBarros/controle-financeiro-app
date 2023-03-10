import { AfterContentInit, Component } from '@angular/core';
import jQuery from 'jquery';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterContentInit {
 
  ngAfterContentInit() {
    (function($) {
      "use strict";
      let path = window.location.href; 
          $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
              if (this instanceof HTMLLinkElement && this.href === path) {
                  $(this).addClass("active");
              }
          });
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);
  }

}
