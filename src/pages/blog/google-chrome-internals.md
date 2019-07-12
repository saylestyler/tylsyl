---
templateKey: blog-post
title: browser internals
date: '2018-07-24T12:28:52-04:00'
description: browsers
tags:
  - chrome
  - firefox
  - not-safari
---

fun urls from `firefox://*`, `chrome://`, and `safari://`

# List of Chrome URLs

chrome://about -- lists all internal Chrome URLs.
chrome://accessibility - Displays accessibility information for each tab open in the browser, and whether the feature is turned on globally.
chrome://appcache-internals - Information about appcached sites, including how much space they use.
chrome://apps/ - Lists all installed applications (by user and those that ship with the Chrome browser on a new page.
chrome://blob-internals/ - Information about Binary Large Objects (blobs)
chrome://bluetooth-internals/ -- Displays information about connected Bluetooth adapters and devices, e.g. whether devices are presented and discoverable.
chrome://bookmarks - Opens the browser's bookmarks manager
chrome://chrome/ - Opens the about page.
chrome://chrome-urls - Displays this list. Can also be loaded with Chrome://About
chrome://components/ - A list of internal components such as "chrome crash service" or "pepper flash", and options to check for updates for each individually.
chrome://conflicts/ - Lists all modules loaded and reveals whether there are any conflicts.
chrome://crashes/ - Displays information on recent crashes if crash reporting is enabled.
chrome://credits - Technologies that are included in the browser, their licenses, and who has created them
chrome://device-log/ - Shows a log of device related events.
chrome://devices/ - Lists physical or virtual devices connected to Chrome. Option to add printers to Google Cloud Print.
chrome://dino -- Displays the "there is no Internet connection" error page.
chrome://discards/ - Information about tabs that were discarded during the session. Options to discard individual tabs from the page.
chrome://dns - If prefetching is enabled, then information about the prefetching is displayed here
chrome://download-internals -- Start downloads and monitor responses and the process.
chrome://downloads - The browser's download manager listing all past downloads
chrome://extensions - Displays the installed extensions
chrome://flags - Displays experimental features that may or may not be integrated into the browser at one time or the other
chrome://flash - Detailed information about Chrome's Flash integration
chrome://gcm-internals/ - Displays Google Cloud Messaging information.
chrome://gpu - Information about the video card and supported features, e.g. hardware acceleration
chrome://help/ - Opens the about page.
chrome://histograms - Histogram related information
chrome://history - Opens the browsing history page with options to clear the browsing history or look through it to find a page that you have opened in the past.
chrome://indexeddb-internals/ - IndexedDB information in the user profile.
chrome://inspect - Option to inspect elements, such as pages or extensions in Chrome
chrome://interventions-internals -- Lists the intervention status, flags, logs, and other information.
chrome://invalidations/ - Lists invalidations debug information
chrome://local-state/ - Lists features and whether they are enabled or not in the local browser, also state information.
chrome://media-engagement -- Displays the media engagement score and thresholds for all sites opened in the browser. The score is used to determine video autoplay with sound.
chrome://media-internals - Displays media information when you play media
chrome://nacl - Information about Chrome's NaCl plugin (Native Client)
chrome://net-internals - Displays detailed network and connection related information, including SPDY connections, sockets or dns lookups
chrome://network-error/ - Displays the network error message.
chrome://network-errors/ - Displays the list of network error messages that Chrome may throw.
chrome://newtab - Displays the new tab page
chrome://ntp-tiles-internals -- Displays information about the tiles on the New Tab page and the Top sites functionality.
chrome://omnibox - Display address bar input results on this page, includes search, shortcuts and history information in the results
chrome://password-manager-internals/ - Password manager logs are listed on the page. Logs are cleared automatically when the page is closed.
chrome://policy - All policies that are currently active in the browser
chrome://predictors - A list of auto complete and resource prefetch predictors based on past activities
chrome://print - The print preview page
chrome://quota-internals - Information about free disk space available for the Chrome profile directory, and usage and quota details
chrome://safe-browsing -- currently under construction. Displays Safe Browsing status.
chrome://serviceworker-internals/ - Lists all Service Workers registered by the browser, and options to unregister.
chrome://settings - Opens the main Chrome Settings' page.
chrome://signin-internals -- Displays inforamtion about the signed in account(s) such as last signin details or validity.
chrome://site-engagement -- Dispalys an engagement score for all sites visited in the browser.
hrome://suggestions/ - All New Tab page suggestions, and when they expire.
chrome://supervised-user-internals/ -- Lists information about the active user, and gives administrators options to test website filters and other things.
chrome://sync-internals - Detailed information about the browser's synchronization feature if enabled.
chrome://system/ - Lists JSON information about the system, sync, memory usage and more.
chrome://taskscheduler-internals -- Lists task scheduler internals.
chrome://terms - Google Chrome's Terms of Service
chrome://thumbnails/ - All top sites urls with and without thumbnails.
chrome://tracing - Recording needs to be activated before the page gets filled with information. Once you do, the browser will start to record your browsing activity
chrome://translate-internals/ - Translation information that include supported languages, which languages get never or always translated, and logs.
chrome;//usb-internals -- Add and test USB devices connected to the computer.
chrome://user-actions/ - A log of user actions, e.g. close tab, change tab and so on.
chrome://version - Displays the browsers version and various related information, including command line switches, user agent, JavaScript, Flash and WebKit versions, as well as path variables
chrome://webrtc-internals/ - Create a dump by downloading PeerConnection updates and stats data.
chrome://webrtc-logs/ - Lists recently captured WebRTC logs.

expanded:

## chrome://appcache-internals

Instances in /Users/tyler/Library/Application Support/Google/Chrome/ at
the time of writing

```
https://devdocs.io/
Manifest: https://devdocs.io/manifest.appcache
Size: 1019 kB
Creation Time: Sat Jul 07 2018 17:28:17 GMT-0400 (Eastern Daylight Time)
Last Access Time: Sun Jul 08 2018 15:13:24 GMT-0400 (Eastern Daylight Time)
Last Update Time: Sun Jul 08 2018 15:13:24 GMT-0400 (Eastern Daylight Time)
Remove Item	View Details
```

Viewing the Details of ^ leads to... cached thangs:

```
https://cdn.devdocs.io/assets/application-dark-a5ccbffc0dc2d2a6e07177b52612d664cb7a9edc902f7ee837334a71f9ab3e19.css 87.2 kB Explicit
https://devdocs.io/ 25.2 kB Explicit,Master,Fallback
https://devdocs.io/docs/html/index.json?1526249051 24.1 kB Explicit
https://devdocs.io/docs/https/index.json?1526250801 32.6 kB Explicit
https://devdocs.io/docs/react/index.json?1528679925 12.6 kB Explicit
https://devdocs.io/manifest.appcache 1.4 kB Manifest
```

## chrome://bookmarks



## chrome://chrome
## chrome://chrome-urls
## chrome://components
## chrome://crashes
## chrome://credits
## chrome://device-log

```
Add a query param in URL to auto-refresh the page: chrome://device-log/?refresh=<sec>

Refresh Show:   Error   User   Event   Debug   Login   Network   Power   Bluetooth   USB   HID   Printer   File Info   Detailed Timestamps
USBUser[2018/09/25 22:24:45.882186] usb_service_impl.cc:484 USB device added: vendor=1452 "Broadcom Corp.", product=33424 "Bluetooth USB Host Controller", serial="", guid=bc1a1fe8-fbe1-41b3-a5b2-63e76da17f5c

USBUser[2018/09/25 22:24:45.851768] usb_service_impl.cc:484 USB device added: vendor=1452 "Apple Inc.", product=4776 "iPhone", serial="1cc244f3bfb9b13a480b2b8633bd44e2de533bbe", guid=6ea5ee16-1101-4d93-8fca-e821818ffc7e

BluetoothEvent[2018/09/25 22:24:40.527860] bluetooth_api.cc:72 BluetoothAPI: 0x7fd79bf4b070
```

## chrome://flags

here are my enabled flags

```
Enables fast tab/window closing - runs a tab's onunload js handler independently of the GUI. – Mac, Windows, Linux, Chrome OS, Android

#enable-fast-unload

Save Page as MHTML
Enables saving pages as MHTML: a single text file containing HTML and all sub-resources. – Mac, Windows, Linux

#save-page-as-mhtml

Experimental JavaScript
Enable web pages to use experimental JavaScript features. – Mac, Windows, Linux, Chrome OS, Android

#enable-javascript-harmony

Experimental Web Platform features
Enables experimental Web Platform features that are in development. – Mac, Windows, Linux, Chrome OS, Android

#enable-experimental-web-platform-features

Developer Tools experiments
Enables Developer Tools experiments. Use Settings panel in Developer Tools to toggle individual experiments. – Mac, Windows, Linux, Chrome OS

#enable-devtools-experiments

UI Layout for the browser's top chrome
Toggles between 1) Normal - for clamshell devices, 2) Hybrid (previously touch) - middle point for devices with a touch screen, 3) Touchable - new unified interface for touch and convertibles (Chrome OS), 4) Material Design refresh and 5) Touchable Material Design refresh. Enabling #upcoming-ui-features forces the Material Design refresh option. – Mac, Windows, Linux, Chrome OS

#top-chrome-md

Tab audio muting UI control
When enabled, the audio indicators in the tab strip double as tab audio mute controls. This also adds commands in the tab context menu for quickly muting multiple selected tabs. – Mac, Windows, Linux, Chrome OS

#enable-tab-audio-muting

NoScript previews
Enable disabling JavaScript on some pages on slow networks. – Mac, Windows, Linux, Chrome OS, Android

#enable-noscript-previews

Experimental contextual omnibox suggestion
Change omnibox contextual suggestions to an experimental source. Note that this is not an on/off switch for contextual omnibox and it only applies to suggestions provided before the user starts typing a URL or a search query (i.e. zero suggest). – Mac, Windows, Linux, Chrome OS, Android

#enable-zero-suggest-redirect-to-chrome

Omnibox rich entity suggestions
Display entity suggestions using images and an enhanced layout; showing more context and descriptive text about the entity. Has no effect unless either the #upcoming-ui-features flag is Enabled or the #top-chrome-md flag is set to Refresh or Touchable Refresh. – Mac, Windows, Linux, Chrome OS

#omnibox-rich-entity-suggestions

Omnibox tail suggestions
Enable receiving tail suggestions, a type of search suggestion based on the last few words in the query, for the Omnibox. – Mac, Windows, Linux, Chrome OS

#omnibox-tail-suggestions

Enable speculative start of a service worker when a search is predicted.
If enabled, when the user enters text in the omnibox that looks like a a query, any service worker associated with the search engine the query will be sent to is started early. – Mac, Windows, Linux, Chrome OS, Android

#enable-speculative-service-worker-start-on-query-input

Include title for the current URL in the omnibox
In the event that the omnibox provides suggestions on-focus, the URL of the current page is provided as the first suggestion without a title. Enabling this flag causes the title to be displayed. – Mac, Windows, Linux, Chrome OS, Android

#omnibox-display-title-for-current-url

Omnibox UI Show Suggestion Favicons
Shows favicons instead of generic vector icons for URL suggestions in the Omnibox dropdown. – Mac, Windows, Linux, Chrome OS

#omnibox-ui-show-suggestion-favicons

Omnibox UI Max Autocomplete Matches
Changes the maximum number of autocomplete matches displayed in the Omnibox UI. – Mac, Windows, Linux, Chrome OS

#omnibox-ui-max-autocomplete-matches

Experimental Productivity Features
Enable support for experimental developer productivity features, such as Layered APIs and policies for avoiding slow rendering. – Mac, Windows, Linux, Chrome OS, Android

#enable-experimental-productivity-features
```

## chrome://gpu

a whole lot of information:

```
Graphics Feature Status
Canvas: Hardware accelerated
Flash: Hardware accelerated
Flash Stage3D: Hardware accelerated
Flash Stage3D Baseline profile: Hardware accelerated
Compositing: Hardware accelerated
Multiple Raster Threads: Enabled
Native GpuMemoryBuffers: Hardware accelerated
Out-of-process Rasterization: Disabled
Hardware Protected Video Decode: Unavailable
Rasterization: Hardware accelerated
Skia Deferred Display List: Disabled
Skia Renderer: Disabled
Surface Synchronization: Enabled
Video Decode: Hardware accelerated
Viz Service Display Compositor: Disabled
WebGL: Hardware accelerated
WebGL2: Hardware accelerated
Driver Bug Workarounds
add_and_true_to_loop_condition
adjust_src_dst_region_for_blitframebuffer
avoid_stencil_buffers
decode_encode_srgb_for_generatemipmap
disable_2d_canvas_auto_flush
disable_framebuffer_cmaa
disable_webgl_rgb_multisampling_usage
dont_use_loops_to_initialize_variables
emulate_abs_int_function
get_frag_data_info_bug
init_two_cube_map_levels_before_copyteximage
max_msaa_sample_count_4
msaa_is_slow
pack_parameters_workaround_with_pack_buffer
rebind_transform_feedback_before_resume
regenerate_struct_names
remove_invariant_and_centroid_for_essl3
reset_teximage2d_base_level
rewrite_texelfetchoffset_to_texelfetch
scalarize_vec_and_mat_constructor_args
set_zero_level_before_generating_mipmap
unfold_short_circuit_as_ternary_operation
unpack_alignment_workaround_with_unpack_buffer
unpack_image_height_workaround_with_unpack_buffer
use_intermediary_for_copy_texture_image
use_unused_standard_shared_blocks
Problems Detected
Protected video decoding with swap chain is for Windows and Intel only
Disabled Features: protected_video_decode
Unfold short circuit on Mac OS X: 307751
Applied Workarounds: unfold_short_circuit_as_ternary_operation
Always rewrite vec/mat constructors to be consistent: 398694
Applied Workarounds: scalarize_vec_and_mat_constructor_args
Mac drivers handle struct scopes incorrectly: 403957
Applied Workarounds: regenerate_struct_names
On Intel GPUs MSAA performance is not acceptable for GPU rasterization: 527565
Applied Workarounds: msaa_is_slow
glGenerateMipmap fails if the zero texture level is not set on some Mac drivers: 560499
Applied Workarounds: set_zero_level_before_generating_mipmap
Pack parameters work incorrectly with pack buffer bound: 563714
Applied Workarounds: pack_parameters_workaround_with_pack_buffer
Alignment works incorrectly with unpack buffer bound: 563714
Applied Workarounds: unpack_alignment_workaround_with_unpack_buffer
copyTexImage2D fails when reading from IOSurface on multiple GPU types.: 581777
Applied Workarounds: use_intermediary_for_copy_texture_image
Multisample renderbuffers with format GL_RGB8 have performance issues on Intel GPUs.: 607130
Applied Workarounds: disable_webgl_rgb_multisampling_usage
Use GL_INTEL_framebuffer_CMAA on ChromeOS: 535198
Applied Workarounds: disable_framebuffer_cmaa
glGetFragData{Location|Index} works incorrectly on Max: 638340
Applied Workarounds: get_frag_data_info_bug
glResumeTransformFeedback works incorrectly on Intel GPUs: 638514
Applied Workarounds: rebind_transform_feedback_before_resume
Result of abs(i) where i is an integer in vertex shader is wrong: 642227
Applied Workarounds: emulate_abs_int_function
Rewrite texelFetchOffset to texelFetch for Intel Mac: 642605
Applied Workarounds: rewrite_texelfetchoffset_to_texelfetch
Rewrite condition in for and while loops for Intel Mac: 644669
Applied Workarounds: add_and_true_to_loop_condition
Decode and encode before generateMipmap for srgb format textures on macosx: 634519
Applied Workarounds: decode_encode_srgb_for_generatemipmap
Init first two levels before CopyTexImage2D for cube map texture on Intel Mac 10.12: 648197
Applied Workarounds: init_two_cube_map_levels_before_copyteximage
Insert statements to reference all members in unused std140/shared blocks on Mac: 618464
Applied Workarounds: use_unused_standard_shared_blocks
Tex(Sub)Image3D performs incorrectly when uploading from unpack buffer with GL_UNPACK_IMAGE_HEIGHT greater than zero on Intel Macs: 654258
Applied Workarounds: unpack_image_height_workaround_with_unpack_buffer
adjust src/dst region if blitting pixels outside read framebuffer on Mac: 644740
Applied Workarounds: adjust_src_dst_region_for_blitframebuffer
Mac driver GL 4.1 requires invariant and centroid to match between shaders: 639760, 641129
Applied Workarounds: remove_invariant_and_centroid_for_essl3
Disable KHR_blend_equation_advanced until cc shaders are updated: 661715
Applied Workarounds: disable(GL_KHR_blend_equation_advanced), disable(GL_KHR_blend_equation_advanced_coherent)
Certain Apple devices leak stencil buffers: 713854
Applied Workarounds: avoid_stencil_buffers
Reset TexImage2D base level to 0 on Intel Mac 10.12.4: 705865
Applied Workarounds: reset_teximage2d_base_level
Don't expose disjoint_timer_query extensions to WebGL: 808744
Shader variable initialization in a loop caused perf regression on Mac Intel.: 809422
Applied Workarounds: dont_use_loops_to_initialize_variables
8x MSAA is slow for alpha:false WebGL contexts on Mac Intel: 812071
Applied Workarounds: max_msaa_sample_count_4
glFlush error on Mac: 841755
Applied Workarounds: disable_2d_canvas_auto_flush
Viz service display compositor is not enabled by default.
Disabled Features: viz_display_compositor
Skia renderer is not used by default.
Disabled Features: skia_renderer
Skia deferred display list is not used by default.
Disabled Features: skia_deferred_display_list
Version Information
Data exported	2018-09-26T02:29:38.297Z
Chrome version	Chrome/69.0.3497.100
Operating system	Mac OS X 10.13.6
Software rendering list URL	https://chromium.googlesource.com/chromium/src/+/8920e690dd011895672947112477d10d5c8afb09/gpu/config/software_rendering_list.json
Driver bug list URL	https://chromium.googlesource.com/chromium/src/+/8920e690dd011895672947112477d10d5c8afb09/gpu/config/gpu_driver_bug_list.json
ANGLE commit id	6ffc489d4f18
2D graphics backend	Skia/69 e110fd1ebd2d559838c49a8821ebf18986bd6ec2-
Command Line	/Applications/Google Chrome.app/Contents/MacOS/Google Chrome --flag-switches-begin --enable-devtools-experiments --enable-experimental-web-platform-features --enable-fast-unload --javascript-harmony --enable-tab-audio-muting --save-page-as-mhtml --top-chrome-md=material-refresh --enable-features=ExperimentalProductivityFeatures,NoScriptPreviews,OmniboxDisplayTitleForCurrentUrl,OmniboxRichEntitySuggestions,OmniboxSpeculativeServiceWorkerStartOnQueryInput,OmniboxTailSuggestions,OmniboxUIExperimentMaxAutocompleteMatches,OmniboxUIExperimentShowSuggestionFavicons,ZeroSuggestRedirectToChrome --flag-switches-end
Driver Information
Initialization time	66
In-process GPU	false
Passthrough Command Decoder	false
Sandboxed	true
GPU0	VENDOR = 0x8086 [Intel Inc.], DEVICE= 0x162b [Intel(R) Iris(TM) Graphics 6100] *ACTIVE*
Optimus	false
AMD switchable	false
Driver vendor	INTEL
Driver version	10.36.19
Driver date
Pixel shader version	4.10
Vertex shader version	4.10
Max. MSAA samples	8
Machine model name	MacBookPro
Machine model version	12.1
GL_VENDOR	Intel Inc.
GL_RENDERER	Intel(R) Iris(TM) Graphics 6100
GL_VERSION	4.1 INTEL-10.36.19
GL_EXTENSIONS	GL_ARB_blend_func_extended GL_ARB_draw_buffers_blend GL_ARB_draw_indirect GL_ARB_ES2_compatibility GL_ARB_explicit_attrib_location GL_ARB_gpu_shader_fp64 GL_ARB_gpu_shader5 GL_ARB_instanced_arrays GL_ARB_internalformat_query GL_ARB_occlusion_query2 GL_ARB_sample_shading GL_ARB_sampler_objects GL_ARB_separate_shader_objects GL_ARB_shader_bit_encoding GL_ARB_shader_subroutine GL_ARB_shading_language_include GL_ARB_tessellation_shader GL_ARB_texture_buffer_object_rgb32 GL_ARB_texture_cube_map_array GL_ARB_texture_gather GL_ARB_texture_query_lod GL_ARB_texture_rgb10_a2ui GL_ARB_texture_storage GL_ARB_texture_swizzle GL_ARB_timer_query GL_ARB_transform_feedback2 GL_ARB_transform_feedback3 GL_ARB_vertex_attrib_64bit GL_ARB_vertex_type_2_10_10_10_rev GL_ARB_viewport_array GL_EXT_debug_label GL_EXT_debug_marker GL_EXT_framebuffer_multisample_blit_scaled GL_EXT_texture_compression_s3tc GL_EXT_texture_filter_anisotropic GL_EXT_texture_sRGB_decode GL_APPLE_client_storage GL_APPLE_container_object_shareable GL_APPLE_flush_render GL_APPLE_object_purgeable GL_APPLE_rgb_422 GL_APPLE_row_bytes GL_APPLE_texture_range GL_ATI_texture_mirror_once GL_NV_texture_barrier
Disabled Extensions	GL_KHR_blend_equation_advanced GL_KHR_blend_equation_advanced_coherent
Disabled WebGL Extensions	EXT_disjoint_timer_query EXT_disjoint_timer_query_webgl2
Window system binding vendor
Window system binding version
Window system binding extensions
Direct rendering	Yes
Reset notification strategy	0x0000
GPU process crash count	0
Compositor Information
Tile Update Mode	Zero-copy
Partial Raster	Enabled
GpuMemoryBuffers Status
ATC	Software only
ATCIA	Software only
DXT1	Software only
DXT5	Software only
ETC1	Software only
R_8	GPU_READ, SCANOUT, SCANOUT_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE_PERSISTENT
R_16	Software only
RG_88	Software only
BGR_565	Software only
RGBA_4444	Software only
RGBX_8888	Software only
RGBA_8888	GPU_READ, SCANOUT, SCANOUT_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE_PERSISTENT
BGRX_8888	GPU_READ, SCANOUT, SCANOUT_CPU_READ_WRITE
BGRX_1010102	GPU_READ, SCANOUT, SCANOUT_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE_PERSISTENT
RGBX_1010102	Software only
BGRA_8888	GPU_READ, SCANOUT, SCANOUT_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE_PERSISTENT
RGBA_F16	GPU_READ, SCANOUT, SCANOUT_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE_PERSISTENT
YVU_420	Software only
YUV_420_BIPLANAR	GPU_READ, SCANOUT, SCANOUT_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE_PERSISTENT
UYVY_422	GPU_READ, SCANOUT, SCANOUT_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE, GPU_READ_CPU_READ_WRITE_PERSISTENT
Display(s) Information
Info	Display[69732928] bounds=[0,0 1440x900], workarea=[0,22 1440x878], scale=2, external.
Color space information	{primaries_d50_referred: [[0.6389, 0.3402], [0.3162, 0.6027], [0.1631, 0.0879]], transfer:0.0000*x + 0.0000 if x < 0.0000 else (1.0000*x + 0.0000)**1.8008 + 0.0000, matrix:RGB, range:FULL}
Bits per color component	8
Bits per pixel	24
Video Acceleration Information
Decode h264 baseline	up to 4096x2160 pixels
Decode h264 extended	up to 4096x2160 pixels
Decode h264 main	up to 4096x2160 pixels
Decode h264 high	up to 4096x2160 pixels
Encode h264 baseline	up to 4096x2160 pixels and/or 30.000 fps
Encode h264 main	up to 4096x2160 pixels and/or 30.000 fps
Encode h264 high	up to 4096x2160 pixels and/or 30.000 fps
Log Messages
[37011:775:0925/222528.405626:ERROR:gles2_cmd_decoder.cc(18047)] : [.BrowserCompositor-0x7fd79d1da600]GL ERROR :GL_INVALID_OPERATION : glCreateAndConsumeTextureCHROMIUM: invalid mailbox name
[37011:775:0925/222528.405755:ERROR:gles2_cmd_decoder.cc(12520)] : [.BrowserCompositor-0x7fd79d1da600]GL ERROR :GL_INVALID_VALUE : glScheduleCALayerCHROMIUM: unsupported texture format
[37011:775:0925/222528.405793:ERROR:gles2_cmd_decoder.cc(18047)] : [.BrowserCompositor-0x7fd79d1da600]GL ERROR :GL_INVALID_OPERATION : glCreateAndConsumeTextureCHROMIUM: invalid mailbox name
[37011:775:0925/222528.405819:ERROR:gles2_cmd_decoder.cc(12520)] : [.BrowserCompositor-0x7fd79d1da600]GL ERROR :GL_INVALID_VALUE : glScheduleCALayerCHROMIUM: unsupported texture format
[37011:775:0925/222528.419329:ERROR:gles2_cmd_decoder.cc(12520)] : [.BrowserCompositor-0x7fd79d1da600]GL ERROR :GL_INVALID_VALUE : glScheduleCALayerCHROMIUM: unsupported texture format
[37011:775:0925/222528.419388:ERROR:gles2_cmd_decoder.cc(12520)] : [.BrowserCompositor-0x7fd79d1da600]GL ERROR :GL_INVALID_VALUE : glScheduleCALayerCHROMIUM: unsupported texture format
[37011:775:0925/222528.435270:ERROR:gles2_cmd_decoder.cc(12520)] : [.BrowserCompositor-0x7fd79d1da600]GL ERROR :GL_INVALID_VALUE : glScheduleCALayerCHROMIUM: unsupported texture format
[37011:775:0925/222528.435341:ERROR:gles2_cmd_decoder.cc(12520)] : [.BrowserCompositor-0x7fd79d1da600]GL ERROR :GL_INVALID_VALUE : glScheduleCALayerCHROMIUM: unsupported texture format
[37011:775:0925/222718.044249:WARNING:ipc_message_attachment_set.cc(49)] : MessageAttachmentSet destroyed with unconsumed attachments: 0/1
```

## chrome://histograms

bizarro:

```
Stats accumulated from browser startup to previous page load; reload to get stats as of this page load.

Refresh
Histogram: DNS.HostCache.UpdateStale.NetworkChanges_Overlap recorded 1 samples, mean = 0.0 (flags = 0x41)
0  ------------------------------------------------------------------------O (1 = 100.0%)
1  ...


Histogram: DNS.HostCache.UpdateStale.ExpiredBy_Overlap recorded 1 samples, mean = 116560.0 (flags = 0x41)
0      ...
94106  ------------------------------------------------------------------------O (1 = 100.0%) {0.0%}
127499 ...


Histogram: Settings.JsonDataWriteCount.Local_State recorded 1 samples, mean = 17.0 (flags = 0x41)
0   ...
17  ------------------------------------------------------------------------O (1 = 100.0%) {0.0%}
18  ...
```
## chrome://indexeddb-internals
## chrome://inspect
## chrome://interventions-internals
## chrome://invalidations
## chrome://local-state
## chrome://media-engagement
## chrome://media-internals
## chrome://nacl
## chrome://net-export
## chrome://net-internals
## chrome://network-error
## chrome://network-errors
## chrome://newtab
## chrome://ntp-tiles-internals
## chrome://omnibox
## chrome://password-manager-internals
## chrome://policy
## chrome://predictors
## chrome://print
## chrome://quota-internals
## chrome://safe-browsing
## chrome://serviceworker-internals
## chrome://settings
## chrome://signin-internals
## chrome://site-engagement
## chrome://suggestions
## chrome://supervised-user-internals
## chrome://sync-internals
## chrome://system
## chrome://taskscheduler-internals
## chrome://terms
## chrome://thumbnails
## chrome://tracing
## chrome://translate-internals
## chrome://usb-internals
## chrome://user-actions
## chrome://version
## chrome://webrtc-internals
## chrome://webrtc-logs
For Debug
The following pages are for debugging purposes only. Because they crash or hang the renderer, they're not linked directly; you can type them into the address bar if you need them.

chrome://badcastcrash/
chrome://inducebrowsercrashforrealz/
chrome://crash/
chrome://crashdump/
chrome://kill/
chrome://hang/
chrome://shorthang/
chrome://gpuclean/
chrome://gpucrash/
chrome://gpuhang/
chrome://memory-exhaust/
chrome://ppapiflashcrash/
chrome://ppapiflashhang/
chrome://quit/
chrome://restart/


## google app scripts

```javascript
// google app scripts: Use this code for Google Docs, Forms, or new Sheets.

function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('Dialog')
      .addItem('Open', 'openDialog')
      .addToUi();
}

function openDialog() {
  var html = HtmlService.createHtmlOutputFromFile('Index');
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Dialog title');
}
```

## greasemonkey

1. click [the ext](https://tampermonkey.net/contrib.php?src=a)
2. add [scripts](https://tampermonkey.net/scripts.php)
3. reload page

example user script:

```javascript
// ==UserScript==
// @id          Github_Image_Viewer@https://github.com/jerone/UserScripts
// @name        Github Image Viewer
// @namespace   https://github.com/jerone/UserScripts
// @description Preview images from within the listing.
// @author      jerone
// @copyright   2014+, jerone (https://jeroenvanwarmerdam.nl)
// @license     GPL-3.0
// @homepage    https://github.com/jerone/UserScripts/tree/master/Github_Image_Viewer
// @homepageURL https://github.com/jerone/UserScripts/tree/master/Github_Image_Viewer
// @downloadURL https://github.com/jerone/UserScripts/raw/master/Github_Image_Viewer/Github_Image_Viewer.user.js
// @updateURL   https://github.com/jerone/UserScripts/raw/master/Github_Image_Viewer/Github_Image_Viewer.user.js
// @supportURL  https://github.com/jerone/UserScripts/issues
// @contributionURL https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VCYMHWQ7ZMBKW
// @version     0.4.1
// @icon        https://assets-cdn.github.com/pinned-octocat.svg
// @grant       none
// @run-at      document-end
// @include     https://github.com/*
// ==/UserScript==

(function() {
  String.format = function(string) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return string.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] !== "undefined" ? args[number] : match;
    });
  };

  function proxy(fn) {
    return function() {
      var that = this;
      return function(e) {
        var args = that.slice(0);  // clone;
        args.unshift(e);  // prepend event;
        fn.apply(this, args);
      };
    }.call([].slice.call(arguments, 1));
  }

  var GithubImageViewer = {
    _floater: null,
    _floaterTitle: null,
    _floaterImage: null,
    _floaterMeta: null,

    _imageUrl: null,
    _loaderSrc: "https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif",
    _imageRegex: /.+(\.jpe?g|\.png|\.gif|\.bmp|\.ico|\.tiff?)$/i,

    Initialize: function() {
      var floater = GithubImageViewer._floater = document.createElement("div");
      floater.style.position = "absolute";
      floater.style.top = "0";
      floater.style.left = "0";
      floater.style.zIndex = "999";
      document.body.appendChild(floater);

      var floaterMouseAlign = document.createElement("div");
      floaterMouseAlign.style.position = "absolute";
      floaterMouseAlign.style.bottom = "5px";
      floaterMouseAlign.style.left = "5px";
      floaterMouseAlign.style.border = "1px solid #b7c7cf";
      floaterMouseAlign.style.borderRadius = "3px";
      floaterMouseAlign.style.fontSize = "11px";
      floater.appendChild(floaterMouseAlign);

      var floaterTitle = GithubImageViewer._floaterTitle = document.createElement("div");
      floaterTitle.style.backgroundColor = "#e6f1f6";
      floaterTitle.style.borderBottom = "1px solid #d8e6ec";
      floaterTitle.style.padding = "3px 5px";
      floaterMouseAlign.appendChild(floaterTitle);

      var floaterCenter = document.createElement("div");
      floaterCenter.style.minWidth = "80px";
      floaterCenter.style.minHeight = "80px";
      floaterCenter.style.display = "flex";
      floaterCenter.style.flexDirection = "column";
      floaterCenter.style.backgroundColor = "#f8f8f8";
      floaterCenter.style.padding = "3px";
      floaterMouseAlign.appendChild(floaterCenter);

      var floaterImage = GithubImageViewer._floaterImage = document.createElement("img");
      floaterImage.setAttribute("src", GithubImageViewer._loaderSrc);
      floaterImage.style.margin = "auto";
      floaterImage.style.maxWidth = floaterImage.style.maxHeight = "200px";
      floaterCenter.appendChild(floaterImage);

      var floaterMeta = GithubImageViewer._floaterMeta = document.createElement("div");
      floaterMeta.style.backgroundColor = "#f8f8f8";
      floaterMeta.style.padding = "3px";
      floaterMeta.style.textAlign = "center";
      floaterMeta.style.whiteSpace = "nowrap";
      floaterMouseAlign.appendChild(floaterMeta);
      GithubImageViewer.SetMeta();

      GithubImageViewer.Attach();
    },

    Attach: function() {
      document.getElementById("js-repo-pjax-container").addEventListener("mousemove", function(e) {
        var target = e.target;
        if (target.classList && target.classList.contains("js-navigation-open") &&
          GithubImageViewer._imageRegex.test(target.href)) {

          if (target.getAttribute("title")) {
            target.dataset.title = target.getAttribute("title");
            target.removeAttribute("title");
          }

          if (GithubImageViewer._visible) {
            GithubImageViewer.Show(e.pageX, e.pageY);
          } else {
            GithubImageViewer.AddTimer(proxy(function() {
              GithubImageViewer.ClearTimers();

              GithubImageViewer.Show(e.pageX, e.pageY);

              var href = target.href;
              if (GithubImageViewer._imageUrl !== href) {
                GithubImageViewer._imageUrl = href;
                GithubImageViewer.SetImage(GithubImageViewer._imageUrl);

                GithubImageViewer.SetTitle(target.dataset.title);
              }
            }));
          }
        } else {
          GithubImageViewer.Dispose();
        }
      });
      document.body.addEventListener("click", function() {
        GithubImageViewer.Dispose();
      });
      document.body.addEventListener("contextmenu", function() {
        GithubImageViewer.Dispose();
      });
      document.body.addEventListener("keydown", function(e) {
        if (e.keyCode === 27) {
          GithubImageViewer.Dispose();
        }
      });
    },

    _visible: false,
    Show: function(x, y) {
      GithubImageViewer._visible = true;
      GithubImageViewer._floater.style.left = x + "px";
      GithubImageViewer._floater.style.top = y + "px";
    },
    Hide: function() {
      GithubImageViewer._visible = false;
      GithubImageViewer._floater.style.left = "-1000px";
      GithubImageViewer._floater.style.top = "-1000px";
    },

    Dispose: function() {
      GithubImageViewer.ClearTimers();
      GithubImageViewer.Hide();
      GithubImageViewer._imageUrl = GithubImageViewer._loaderSrc;
      GithubImageViewer.SetImage(GithubImageViewer._imageUrl);
      GithubImageViewer.SetTitle("Loading");
    },

    _timers: [],
    _timeout: 700,
    AddTimer: function(fn) {
      GithubImageViewer._timers.push(window.setTimeout(fn, GithubImageViewer._timeout));
    },
    ClearTimers: function() {
      Array.prototype.forEach.call(GithubImageViewer._timers, function(timer) {
        window.clearTimeout(timer);
      });
    },

    SetTitle: function(text) {
      GithubImageViewer._floaterTitle.textContent = text;
    },

    SetImage: function(src) {
      src = src.replace("/blob/", "/raw/");
      if (src !== GithubImageViewer._loaderSrc) {
        var temp = document.createElement("img");
        temp.style.visibility = "hidden";
        temp.addEventListener("load", function() {
          GithubImageViewer.SetMeta(this.width, this.height);
          this.parentNode.removeChild(temp);
        });
        temp.setAttribute("src", src);
        document.body.appendChild(temp);
      } else {
        GithubImageViewer.SetMeta();
      }

      GithubImageViewer._floaterImage.setAttribute("src", src);
    },

    SetMeta: function(w, h) {
      if (!w && !h) {
        GithubImageViewer._floaterMeta.style.display = "none";
      } else {
        GithubImageViewer._floaterMeta.style.display = "block";
        GithubImageViewer._floaterMeta.innerHTML = String.format("<strong>W:</strong> {0}px | <strong>H:</strong> {1}px", w, h);
      }
    }
  };

  if (document.getElementById("js-repo-pjax-container")) {
    GithubImageViewer.Initialize();
  }
})();
```

hovering over an image file in github now =

![f]()


## chrome://appcache-internals/

example:

*APPLICATION CACHE*

Instances in: /Users/tyler/Library/Application Support/Google/Chrome/Profile 1 (2)

https://itty.bitty.app/

Manifest: https://itty.bitty.app/manifest.appcache

Size: 24.4 kB
Creation Time: Sat Jul 14 2018 01:17:53 GMT-0400 (Eastern Daylight Time)
Last Access Time: Tue Aug 28 2018 23:34:07 GMT-0400 (Eastern Daylight Time)
Last Update Time: Sat Jul 14 2018 01:17:53 GMT-0400 (Eastern Daylight Time)

Remove Item Hide Details

https://itty.bitty.app/ 18.6 kB Master
https://itty.bitty.app/manifest.appcache 5.8 kB Manifest

---

https://www.notion.so/
Manifest: https://www.notion.so/offline.appcache
Size: 10.4 MB

Creation Time: Fri Aug 17 2018 21:44:11 GMT-0400 (Eastern Daylight Time)
Last Access Time: Tue Aug 28 2018 23:34:49 GMT-0400 (Eastern Daylight Time)
Last Update Time: Tue Aug 28 2018 23:34:49 GMT-0400 (Eastern Daylight Time)

## gerrit

google's git = [gerrit](https://gerrit-review.googlesource.com/q/status:open)

