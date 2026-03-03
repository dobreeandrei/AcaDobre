/**
 * AcaDobre — Service Worker
 * Cache-first strategy: all app files are cached on install and served
 * offline indefinitely.
 *
 * HOW TO UPDATE: When you add new question files or change existing ones,
 * bump the CACHE_VERSION string (e.g. 'v2', 'v3'). The next time the app
 * loads while online, the old cache is deleted and everything is re-cached.
 */

const CACHE_VERSION = 'acadobre-v1';

const CACHE_FILES = [
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png',
  // ── Question modules
  './questions/etherchannel.js',
  './questions/ethernet_frame.js',
  './questions/ethertype.js',
  './questions/fhrp.js',
  './questions/icmp.js',
  './questions/ip_classes.js',
  './questions/ip_protocol_nextheader.js',
  './questions/ipv4_header.js',
  './questions/ipv6_header.js',
  './questions/mac_multicast.js',
  './questions/multicast_ipv4.js',
  './questions/multicast_ipv6.js',
  './questions/new_types_demo.js',
  './questions/osi_tcp.js',
  './questions/physical_layer.js',
  './questions/porturi_protocoale_layer4.js',
  './questions/rutare_dinamica.js',
  './questions/standard_names.js',
  './questions/stp.js',
  './questions/tcp_header.js',
  './questions/timers.js',
  './questions/udp_header.js',
  './questions/vlan_tag.js',
  // ── Images
  './questions/images/RJ_45/wire_blue.png',
  './questions/images/RJ_45/wire_brown.png',
  './questions/images/RJ_45/wire_green.png',
  './questions/images/RJ_45/wire_orange.png',
  './questions/images/RJ_45/wire_white_blue.png',
  './questions/images/RJ_45/wire_white_brown.png',
  './questions/images/RJ_45/wire_white_green.png',
  './questions/images/RJ_45/wire_white_orange.png',
  './questions/images/ethernet_frame/ethernet_01.png',
  './questions/images/ethernet_frame/ethernet_02.png',
  './questions/images/ethernet_frame/ethernet_03.png',
  './questions/images/ethernet_frame/ethernet_04.png',
  './questions/images/ethernet_frame/ethernet_05.png',
  './questions/images/ethernet_frame/ethernet_blank.png',
  './questions/images/ethernet_frame/ethernet_complete.png',
  './questions/images/ipv4_header/ipv4_01.png',
  './questions/images/ipv4_header/ipv4_02.png',
  './questions/images/ipv4_header/ipv4_03.png',
  './questions/images/ipv4_header/ipv4_04.png',
  './questions/images/ipv4_header/ipv4_05.png',
  './questions/images/ipv4_header/ipv4_06.png',
  './questions/images/ipv4_header/ipv4_07.png',
  './questions/images/ipv4_header/ipv4_08.png',
  './questions/images/ipv4_header/ipv4_09.png',
  './questions/images/ipv4_header/ipv4_10.png',
  './questions/images/ipv4_header/ipv4_11.png',
  './questions/images/ipv4_header/ipv4_12.png',
  './questions/images/ipv4_header/ipv4_13.png',
  './questions/images/ipv4_header/ipv4_14.png',
  './questions/images/ipv4_header/ipv4_blank.png',
  './questions/images/ipv4_header/ipv4_complete.png',
  './questions/images/ipv6_header/ipv6_01.png',
  './questions/images/ipv6_header/ipv6_02.png',
  './questions/images/ipv6_header/ipv6_03.png',
  './questions/images/ipv6_header/ipv6_04.png',
  './questions/images/ipv6_header/ipv6_05.png',
  './questions/images/ipv6_header/ipv6_06.png',
  './questions/images/ipv6_header/ipv6_07.png',
  './questions/images/ipv6_header/ipv6_blank.png',
  './questions/images/ipv6_header/ipv6_complete.png',
  './questions/images/tcp_header/tcp_01.png',
  './questions/images/tcp_header/tcp_02.png',
  './questions/images/tcp_header/tcp_03.png',
  './questions/images/tcp_header/tcp_04.png',
  './questions/images/tcp_header/tcp_05.png',
  './questions/images/tcp_header/tcp_06.png',
  './questions/images/tcp_header/tcp_07.png',
  './questions/images/tcp_header/tcp_08.png',
  './questions/images/tcp_header/tcp_09.png',
  './questions/images/tcp_header/tcp_10.png',
  './questions/images/tcp_header/tcp_blank.png',
  './questions/images/tcp_header/tcp_complete.png',
  './questions/images/udp_header/udp_01.png',
  './questions/images/udp_header/udp_02.png',
  './questions/images/udp_header/udp_03.png',
  './questions/images/udp_header/udp_blank.png',
  './questions/images/udp_header/udp_complete.png',
  './questions/images/vlan_tag/vlan_tag_01.png',
  './questions/images/vlan_tag/vlan_tag_02.png',
  './questions/images/vlan_tag/vlan_tag_03.png',
  './questions/images/vlan_tag/vlan_tag_blank.png',
  './questions/images/vlan_tag/vlan_tag_complete.png',
];

// ── Install: cache everything
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then(cache => cache.addAll(CACHE_FILES))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache any new successful responses (e.g. newly added question images)
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      });
    })
  );
});
