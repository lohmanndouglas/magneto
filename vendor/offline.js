





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-5b61aadc846f0818981ceec31b49c475fb084c163fdec5efbc2c21ef539092a9.css" integrity="sha256-W2Gq3IRvCBiYHO7DG0nEdfsITBY/3sXvvCwh71OQkqk=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-0c02870dc9ba1c994e29151ec7c3d80007b73ed85f616f5bae5e5e5a2eb2e292.css" integrity="sha256-DAKHDcm6HJlOKRUex8PYAAe3PthfYW9brl5eWi6y4pI=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>offline/offline.js at master · HubSpot/offline</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars3.githubusercontent.com/u/326419?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="HubSpot/offline" property="og:title" /><meta content="https://github.com/HubSpot/offline" property="og:url" /><meta content="Automatically display online/offline indication to your users. #hubspot-open-source" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTU1MzQxNjcwOjE2ZjU0N2ZhMzc1MzkwN2EwZWYwMzZjODViM2YzMWNhYjRmZDgzNWIyMDJjOGVjYTE2OTVmNmY2MGNkZmFiYjc=--86db31760a1acea16f349db00b3350ee854b62ba">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="E5E5:BD3A:943574:EEB71C:58DC23F3" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="E5E5:BD3A:943574:EEB71C:58DC23F3" name="octolytics-dimension-request_id" /><meta content="5000444" name="octolytics-actor-id" /><meta content="maubrsp" name="octolytics-actor-login" /><meta content="11530840f8cbc42811648c720bc25e09c3c9f1dc94baa6cdc2f3ab83f38d547f" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="maubrsp">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YzM1MjgxYmY3YzlmZjJmNTkxM2IyOTY3YjQ2YzExYWU0NGQ1ZjI5M2ZkYTA1ZDc2ZTg2MTQ3YmNmODliNWI3MHx7InJlbW90ZV9hZGRyZXNzIjoiMTc3LjE4OC4xMC42MCIsInJlcXVlc3RfaWQiOiJFNUU1OkJEM0E6OTQzNTc0OkVFQjcxQzo1OERDMjNGMyIsInRpbWVzdGFtcCI6MTQ5MDgyMjEzMSwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="08c8dc3ed2bfecd698c63340f6669630d4f07f73">

  <meta http-equiv="x-pjax-version" content="34a3c3336c013801d1b1d41887845184">
  

    
  <meta name="description" content="Automatically display online/offline indication to your users. #hubspot-open-source">
  <meta name="go-import" content="github.com/HubSpot/offline git https://github.com/HubSpot/offline.git">

  <meta content="326419" name="octolytics-dimension-user_id" /><meta content="HubSpot" name="octolytics-dimension-user_login" /><meta content="13753838" name="octolytics-dimension-repository_id" /><meta content="HubSpot/offline" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="13753838" name="octolytics-dimension-repository_network_root_id" /><meta content="HubSpot/offline" name="octolytics-dimension-repository_network_root_nwo" />
        <link href="https://github.com/HubSpot/offline/commits/master.atom" rel="alternate" title="Recent Commits to offline:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/HubSpot/offline/blob/master/offline.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    


  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<div class="header" role="banner">
  <div class="container clearfix">
    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/HubSpot/offline/search" class="js-site-search-form" data-scoped-search-url="/HubSpot/offline/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/HubSpot/offline/blob/master/offline.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator " data-channel="notification-changed:5000444" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <svg aria-hidden="true" class="octicon octicon-bell float-left" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="HubSpot/offline">This repository</span>
  </div>
    <a class="dropdown-item" href="/HubSpot/offline/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/maubrsp"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@maubrsp" class="avatar" src="https://avatars2.githubusercontent.com/u/5000444?v=3&amp;s=40" height="20" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">maubrsp</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/maubrsp" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/maubrsp?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Clcl4ZpzuXChJA2YxARurUoHUdobpTsRRCSlqI9nY25EaENdCMc2TLWNlLp4n8YcGvSKabQC9F84soceh+M7tQ==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RWmMpClx3HSlUSNU////6wysH7cFEJzEW0gMbiG9aTsLVuoYu8VTSLH4unZDZFdaXF/EBKq3U4on3i7YKTkx4A==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>  </div>
</div>


      
<div class="flash flash-full js-notice flash-warn">
<div class="container">
      <h4>
        You don’t have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
      </h4>
      Email verification helps our support team verify ownership if you lose account access
        and allows you to receive all the notifications you ask for.


















</div>
</div>

  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
    <div class="container repohead-details-container">


      <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="KlxNDjn1EFz9Z0yzqiFGksR2pwuUPqwPLkdDR0sFPLhffv1l5ldeX5iNCQPiM4eeOp4i4A5sdJPHKZ4XnToS0Q==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="13753838" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/HubSpot/offline/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/HubSpot/offline/watchers"
            aria-label="234 users are watching this repository">
            234
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/HubSpot/offline/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YgKEwMcGQagGX+gfvv+MnbMKLW6FKrH1leBOV5DkooFzvewOP7m1VXjmw/JskwV6erTSIjE/644MmDT8YCHxTQ==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar HubSpot/offline"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/HubSpot/offline/stargazers"
           aria-label="7574 users starred this repository">
          7,574
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/HubSpot/offline/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="iBSRZvi4ujr5DK2N3UvCeuRhBrRVK5F7E/BxCjfvPdqZeyXvT0eCK+1kAMqSekO8WtXazuepXB3SZI4WsEKgNw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star HubSpot/offline"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/HubSpot/offline/stargazers"
           aria-label="7574 users starred this repository">
          7,574
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/HubSpot/offline/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jrd+73kGZmigXmwcF3WmqjGnce6Q8euITGzOhfD59VEb4d3H0B4GylRLVA+CWa0BUJJNWL4GYKZyVCPpJg07Zg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of HubSpot/offline to your account"
                aria-label="Fork your own copy of HubSpot/offline to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/HubSpot/offline/network" class="social-count"
       aria-label="692 users forked this repository">
      692
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/HubSpot" class="url fn" rel="author">HubSpot</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/HubSpot/offline" data-pjax="#js-repo-pjax-container">offline</a></strong>

</h1>

    </div>
    <div class="container">
      
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/HubSpot/offline" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /HubSpot/offline" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/HubSpot/offline/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /HubSpot/offline/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">75</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/HubSpot/offline/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /HubSpot/offline/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">15</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/HubSpot/offline/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /HubSpot/offline/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="counter">0</span>
</a>
    <a href="/HubSpot/offline/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /HubSpot/offline/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/HubSpot/offline/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /HubSpot/offline/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/HubSpot/offline/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /HubSpot/offline/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

    </div>
  </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/HubSpot/offline/blob/b30eccbb46078f28300224fb4591b4b9eb027a62/offline.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:8d937d57dac679106558660b73f20950 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/HubSpot/offline/blob/copy-xhr-prototype/offline.js"
               data-name="copy-xhr-prototype"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                copy-xhr-prototype
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/HubSpot/offline/blob/favicon/offline.js"
               data-name="favicon"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                favicon
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/HubSpot/offline/blob/gh-pages/offline.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/HubSpot/offline/blob/master/offline.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.18/offline.js"
              data-name="v0.7.18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.18">
                v0.7.18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.17/offline.js"
              data-name="v0.7.17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.17">
                v0.7.17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.16/offline.js"
              data-name="v0.7.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.16">
                v0.7.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.15/offline.js"
              data-name="v0.7.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.15">
                v0.7.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.14/offline.js"
              data-name="v0.7.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.14">
                v0.7.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.13/offline.js"
              data-name="v0.7.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.13">
                v0.7.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.12/offline.js"
              data-name="v0.7.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.12">
                v0.7.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.11/offline.js"
              data-name="v0.7.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.11">
                v0.7.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.10/offline.js"
              data-name="v0.7.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.10">
                v0.7.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.9/offline.js"
              data-name="v0.7.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.9">
                v0.7.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.8/offline.js"
              data-name="v0.7.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.8">
                v0.7.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.7/offline.js"
              data-name="v0.7.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.7">
                v0.7.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.6/offline.js"
              data-name="v0.7.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.6">
                v0.7.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.5/offline.js"
              data-name="v0.7.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.5">
                v0.7.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.4/offline.js"
              data-name="v0.7.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.4">
                v0.7.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.3/offline.js"
              data-name="v0.7.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.3">
                v0.7.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.2/offline.js"
              data-name="v0.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.2">
                v0.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.1/offline.js"
              data-name="v0.7.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.1">
                v0.7.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.7.0/offline.js"
              data-name="v0.7.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.7.0">
                v0.7.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.6.0/offline.js"
              data-name="v0.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.6.0">
                v0.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.5.0/offline.js"
              data-name="v0.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.5.0">
                v0.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.4.7/offline.js"
              data-name="v0.4.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.7">
                v0.4.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.4.6/offline.js"
              data-name="v0.4.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.6">
                v0.4.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.4.5/offline.js"
              data-name="v0.4.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.5">
                v0.4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.4.4/offline.js"
              data-name="v0.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.4">
                v0.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.4.3/offline.js"
              data-name="v0.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.3">
                v0.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.4.2/offline.js"
              data-name="v0.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.2">
                v0.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.4.1/offline.js"
              data-name="v0.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.1">
                v0.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/HubSpot/offline/tree/v0.4.0/offline.js"
              data-name="v0.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.4.0">
                v0.4.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/HubSpot/offline/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/HubSpot/offline"><span>offline</span></a></span></span><span class="separator">/</span><strong class="final-path">offline.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/HubSpot/offline/commit/3ef194de74f70965589ecc4fd9d1d8b9ca9ad0a2" data-pjax>
          3ef194d
        </a>
        <relative-time datetime="2016-06-15T22:58:45Z">Jun 16, 2016</relative-time>
      </span>
      <div>
        <img alt="@also" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/15624?v=3&amp;s=40" width="20" />
        <a href="/also" class="user-mention" rel="contributor">also</a>
          <a href="/HubSpot/offline/commit/3ef194de74f70965589ecc4fd9d1d8b9ca9ad0a2" class="message" data-pjax="true" title="v0.7.18">v0.7.18</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>7</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="zackbloom" href="/HubSpot/offline/commits/master/offline.js?author=zackbloom"><img alt="@zackbloom" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/55347?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="also" href="/HubSpot/offline/commits/master/offline.js?author=also"><img alt="@also" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/15624?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="rawls238" href="/HubSpot/offline/commits/master/offline.js?author=rawls238"><img alt="@rawls238" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1596135?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="stephanmax" href="/HubSpot/offline/commits/master/offline.js?author=stephanmax"><img alt="@stephanmax" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/334191?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="geekjuice" href="/HubSpot/offline/commits/master/offline.js?author=geekjuice"><img alt="@geekjuice" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1654587?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="matghaleb" href="/HubSpot/offline/commits/master/offline.js?author=matghaleb"><img alt="@matghaleb" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/917532?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="adamschwartz" href="/HubSpot/offline/commits/master/offline.js?author=adamschwartz"><img alt="@adamschwartz" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/154613?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@zackbloom" height="24" src="https://avatars1.githubusercontent.com/u/55347?v=3&amp;s=48" width="24" />
            <a href="/zackbloom">zackbloom</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@also" height="24" src="https://avatars2.githubusercontent.com/u/15624?v=3&amp;s=48" width="24" />
            <a href="/also">also</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@rawls238" height="24" src="https://avatars0.githubusercontent.com/u/1596135?v=3&amp;s=48" width="24" />
            <a href="/rawls238">rawls238</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@stephanmax" height="24" src="https://avatars2.githubusercontent.com/u/334191?v=3&amp;s=48" width="24" />
            <a href="/stephanmax">stephanmax</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@geekjuice" height="24" src="https://avatars1.githubusercontent.com/u/1654587?v=3&amp;s=48" width="24" />
            <a href="/geekjuice">geekjuice</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@matghaleb" height="24" src="https://avatars3.githubusercontent.com/u/917532?v=3&amp;s=48" width="24" />
            <a href="/matghaleb">matghaleb</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@adamschwartz" height="24" src="https://avatars2.githubusercontent.com/u/154613?v=3&amp;s=48" width="24" />
            <a href="/adamschwartz">adamschwartz</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/HubSpot/offline/raw/master/offline.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/HubSpot/offline/blame/master/offline.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/HubSpot/offline/commits/master/offline.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/HubSpot/offline/edit/master/offline.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FYBlUaogMvMDSq4jtF4PIXcWkujtSoeeosU+VIpz96FNG+m1tsCn6JCNVF1hDf6SgXdTfpjYbF4Wy59WrVVVMg==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/HubSpot/offline/delete/master/offline.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="ycgYMd7tLVtSCMlGfmS55gHx1cGC+0EwS0+UrS2MKEAFRLF2JmJAqAzd3CZdC2NqTnrUFzpPjSrWX3Ac7tBYLg==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      290 lines (290 sloc)
      <span class="file-info-divider"></span>
    15.7 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*! offline-js 0.7.18 */</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> Offline, checkXHR, defaultOptions, extendNative, grab, handlers, init;</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">extendNative</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">to</span>, <span class="pl-smi">from</span>) {</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> e, key, results, val;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">    results <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (key <span class="pl-k">in</span> <span class="pl-smi">from</span>.<span class="pl-c1">prototype</span>) <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">      val <span class="pl-k">=</span> <span class="pl-smi">from</span>.<span class="pl-c1">prototype</span>[key], <span class="pl-c1">null</span> <span class="pl-k">==</span> to[key] <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-k">typeof</span> val <span class="pl-k">?</span> <span class="pl-smi">results</span>.<span class="pl-c1">push</span>(to[key] <span class="pl-k">=</span> val) <span class="pl-k">:</span><span class="pl-smi">results</span>.<span class="pl-c1">push</span>(<span class="pl-k">void</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">catch</span> (_error) {</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">      e <span class="pl-k">=</span> _error;</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> results;</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  }, Offline <span class="pl-k">=</span> {}, <span class="pl-smi">Offline</span>.<span class="pl-c1">options</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">Offline</span> <span class="pl-k">?</span> <span class="pl-c1">window</span>.<span class="pl-smi">Offline</span>.<span class="pl-c1">options</span> <span class="pl-k">||</span> {} <span class="pl-k">:</span>{}, </td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">  defaultOptions <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">    checks<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">      xhr<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">url</span><span class="pl-k">:</span><span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/favicon.ico?_=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>();</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">        timeout<span class="pl-k">:</span><span class="pl-c1">5e3</span>,</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        type<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>HEAD<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">      image<span class="pl-k">:</span>{</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">url</span><span class="pl-k">:</span><span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>/favicon.ico?_=<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-k">new</span> <span class="pl-en">Date</span>().<span class="pl-c1">getTime</span>();</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">      active<span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span>xhr<span class="pl-pds">&quot;</span></span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">    checkOnLoad<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    interceptRequests<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">    reconnect<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    deDupBody<span class="pl-k">:</span><span class="pl-k">!</span><span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">grab</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">obj</span>, <span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> cur, i, j, len, part, parts;</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (cur <span class="pl-k">=</span> obj, parts <span class="pl-k">=</span> <span class="pl-smi">key</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.<span class="pl-pds">&quot;</span></span>), i <span class="pl-k">=</span> j <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-smi">parts</span>.<span class="pl-c1">length</span>; len <span class="pl-k">&gt;</span> j <span class="pl-k">&amp;&amp;</span> (part <span class="pl-k">=</span> parts[i], </td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">    cur <span class="pl-k">=</span> cur[part], <span class="pl-s"><span class="pl-pds">&quot;</span>object<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> cur); i <span class="pl-k">=</span> <span class="pl-k">++</span>j) ;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> i <span class="pl-k">===</span> <span class="pl-smi">parts</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span> <span class="pl-k">?</span> cur <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">key</span>) {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> ref, val;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> val <span class="pl-k">=</span> <span class="pl-c1">null</span> <span class="pl-k">!=</span> (ref <span class="pl-k">=</span> <span class="pl-en">grab</span>(<span class="pl-smi">Offline</span>.<span class="pl-c1">options</span>, key)) <span class="pl-k">?</span> ref <span class="pl-k">:</span><span class="pl-en">grab</span>(defaultOptions, key), </td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> val <span class="pl-k">?</span> <span class="pl-en">val</span>() <span class="pl-k">:</span>val;</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> <span class="pl-c1">window</span>.<span class="pl-smi">addEventListener</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">window</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>online<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">setTimeout</span>(<span class="pl-smi">Offline</span>.<span class="pl-smi">confirmUp</span>, <span class="pl-c1">100</span>);</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-k">!</span><span class="pl-c1">1</span>), <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> <span class="pl-c1">window</span>.<span class="pl-smi">addEventListener</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">window</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">Offline</span>.<span class="pl-en">confirmDown</span>();</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-k">!</span><span class="pl-c1">1</span>), <span class="pl-smi">Offline</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>up<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">Offline</span>.<span class="pl-en">markUp</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>confirmed-up<span class="pl-pds">&quot;</span></span>), <span class="pl-s"><span class="pl-pds">&quot;</span>up<span class="pl-pds">&quot;</span></span> <span class="pl-k">!==</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">state</span> <span class="pl-k">?</span> (<span class="pl-smi">Offline</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>up<span class="pl-pds">&quot;</span></span>, </td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>up<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-smi">Offline</span>.<span class="pl-en">markDown</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>confirmed-down<span class="pl-pds">&quot;</span></span>), <span class="pl-s"><span class="pl-pds">&quot;</span>down<span class="pl-pds">&quot;</span></span> <span class="pl-k">!==</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">state</span> <span class="pl-k">?</span> (<span class="pl-smi">Offline</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>down<span class="pl-pds">&quot;</span></span>, </td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>down<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">  }, handlers <span class="pl-k">=</span> {}, <span class="pl-smi">Offline</span>.<span class="pl-en">on</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>, <span class="pl-smi">handler</span>, <span class="pl-smi">ctx</span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> e, events, j, len, results;</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (events <span class="pl-k">=</span> <span class="pl-c1">event</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>), <span class="pl-smi">events</span>.<span class="pl-c1">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (results <span class="pl-k">=</span> [], j <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-smi">events</span>.<span class="pl-c1">length</span>; len <span class="pl-k">&gt;</span> j; j<span class="pl-k">++</span>) e <span class="pl-k">=</span> events[j], <span class="pl-smi">results</span>.<span class="pl-c1">push</span>(<span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(e, handler, ctx));</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> results;</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">null</span> <span class="pl-k">==</span> handlers[<span class="pl-c1">event</span>] <span class="pl-k">&amp;&amp;</span> (handlers[<span class="pl-c1">event</span>] <span class="pl-k">=</span> []), handlers[<span class="pl-c1">event</span>].<span class="pl-c1">push</span>([ ctx, handler ]);</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-smi">Offline</span>.<span class="pl-en">off</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>, <span class="pl-smi">handler</span>) {</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _handler, ctx, i, ref, results;</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">null</span> <span class="pl-k">!=</span> handlers[<span class="pl-c1">event</span>]) {</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">if</span> (handler) {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (i <span class="pl-k">=</span> <span class="pl-c1">0</span>, results <span class="pl-k">=</span> []; i <span class="pl-k">&lt;</span> handlers[<span class="pl-c1">event</span>].<span class="pl-c1">length</span>; ) ref <span class="pl-k">=</span> handlers[<span class="pl-c1">event</span>][i], </td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        ctx <span class="pl-k">=</span> ref[<span class="pl-c1">0</span>], _handler <span class="pl-k">=</span> ref[<span class="pl-c1">1</span>], _handler <span class="pl-k">===</span> handler <span class="pl-k">?</span> <span class="pl-smi">results</span>.<span class="pl-c1">push</span>(handlers[<span class="pl-c1">event</span>].<span class="pl-c1">splice</span>(i, <span class="pl-c1">1</span>)) <span class="pl-k">:</span><span class="pl-smi">results</span>.<span class="pl-c1">push</span>(i<span class="pl-k">++</span>);</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> results;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> handlers[<span class="pl-c1">event</span>] <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> ctx, handler, j, len, ref, ref1, results;</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-c1">null</span> <span class="pl-k">!=</span> handlers[<span class="pl-c1">event</span>]) {</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (ref <span class="pl-k">=</span> handlers[<span class="pl-c1">event</span>].<span class="pl-c1">slice</span>(<span class="pl-c1">0</span>), results <span class="pl-k">=</span> [], j <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-smi">ref</span>.<span class="pl-c1">length</span>; len <span class="pl-k">&gt;</span> j; j<span class="pl-k">++</span>) ref1 <span class="pl-k">=</span> ref[j], </td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">      ctx <span class="pl-k">=</span> ref1[<span class="pl-c1">0</span>], handler <span class="pl-k">=</span> ref1[<span class="pl-c1">1</span>], <span class="pl-smi">results</span>.<span class="pl-c1">push</span>(<span class="pl-smi">handler</span>.<span class="pl-c1">call</span>(ctx));</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> results;</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">checkXHR</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">xhr</span>, <span class="pl-smi">onUp</span>, <span class="pl-smi">onDown</span>) {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _onerror, _onload, _onreadystatechange, _ontimeout, checkStatus;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">checkStatus</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">status</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">status</span> <span class="pl-k">&lt;</span> <span class="pl-c1">12e3</span> <span class="pl-k">?</span> <span class="pl-en">onUp</span>() <span class="pl-k">:</span><span class="pl-en">onDown</span>();</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-c1">null</span> <span class="pl-k">===</span> <span class="pl-smi">xhr</span>.<span class="pl-smi">onprogress</span> <span class="pl-k">?</span> (_onerror <span class="pl-k">=</span> <span class="pl-smi">xhr</span>.<span class="pl-smi">onerror</span>, <span class="pl-smi">xhr</span>.<span class="pl-en">onerror</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">onDown</span>(), <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> _onerror <span class="pl-k">?</span> <span class="pl-smi">_onerror</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, <span class="pl-c1">arguments</span>) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">    }, _ontimeout <span class="pl-k">=</span> <span class="pl-smi">xhr</span>.<span class="pl-smi">ontimeout</span>, <span class="pl-smi">xhr</span>.<span class="pl-en">ontimeout</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">onDown</span>(), <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> _ontimeout <span class="pl-k">?</span> <span class="pl-smi">_ontimeout</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, <span class="pl-c1">arguments</span>) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">    }, _onload <span class="pl-k">=</span> <span class="pl-smi">xhr</span>.<span class="pl-smi">onload</span>, <span class="pl-smi">xhr</span>.<span class="pl-en">onload</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">checkStatus</span>(), <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> _onload <span class="pl-k">?</span> <span class="pl-smi">_onload</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, <span class="pl-c1">arguments</span>) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">    }) <span class="pl-k">:</span>(_onreadystatechange <span class="pl-k">=</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">onreadystatechange</span>, <span class="pl-smi">xhr</span>.<span class="pl-en">onreadystatechange</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">4</span> <span class="pl-k">===</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">readyState</span> <span class="pl-k">?</span> <span class="pl-en">checkStatus</span>() <span class="pl-k">:</span><span class="pl-c1">0</span> <span class="pl-k">===</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">readyState</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">onDown</span>(), <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> _onreadystatechange <span class="pl-k">?</span> <span class="pl-smi">_onreadystatechange</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, <span class="pl-c1">arguments</span>) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-smi">Offline</span>.<span class="pl-smi">checks</span> <span class="pl-k">=</span> {}, <span class="pl-smi">Offline</span>.<span class="pl-smi">checks</span>.<span class="pl-en">xhr</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> e, xhr;</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">    xhr <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">XMLHttpRequest</span>(), <span class="pl-smi">xhr</span>.<span class="pl-smi">offline</span> <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>, <span class="pl-smi">xhr</span>.<span class="pl-c1">open</span>(<span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>checks.xhr.type<span class="pl-pds">&quot;</span></span>), <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>checks.xhr.url<span class="pl-pds">&quot;</span></span>), <span class="pl-k">!</span><span class="pl-c1">0</span>), </td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">null</span> <span class="pl-k">!=</span> <span class="pl-smi">xhr</span>.<span class="pl-smi">timeout</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">xhr</span>.<span class="pl-smi">timeout</span> <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>checks.xhr.timeout<span class="pl-pds">&quot;</span></span>)), </td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">checkXHR</span>(xhr, <span class="pl-smi">Offline</span>.<span class="pl-smi">markUp</span>, <span class="pl-smi">Offline</span>.<span class="pl-smi">markDown</span>);</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">xhr</span>.<span class="pl-c1">send</span>();</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">catch</span> (_error) {</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">      e <span class="pl-k">=</span> _error, <span class="pl-smi">Offline</span>.<span class="pl-en">markDown</span>();</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> xhr;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-smi">Offline</span>.<span class="pl-smi">checks</span>.<span class="pl-en">image</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> img;</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">    img <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>img<span class="pl-pds">&quot;</span></span>), <span class="pl-smi">img</span>.<span class="pl-smi">onerror</span> <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">markDown</span>, <span class="pl-smi">img</span>.<span class="pl-smi">onload</span> <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">markUp</span>, </td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">img</span>.<span class="pl-smi">src</span> <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>checks.image.url<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-smi">Offline</span>.<span class="pl-smi">checks</span>.<span class="pl-smi">down</span> <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">markDown</span>, <span class="pl-smi">Offline</span>.<span class="pl-smi">checks</span>.<span class="pl-smi">up</span> <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">markUp</span>, <span class="pl-smi">Offline</span>.<span class="pl-en">check</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>checking<span class="pl-pds">&quot;</span></span>), <span class="pl-smi">Offline</span>.<span class="pl-smi">checks</span>[<span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>checks.active<span class="pl-pds">&quot;</span></span>)]();</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-smi">Offline</span>.<span class="pl-smi">confirmUp</span> <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">confirmDown</span> <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">check</span>, <span class="pl-smi">Offline</span>.<span class="pl-en">onXHR</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">cb</span>) {</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> _XDomainRequest, _XMLHttpRequest, monitorXHR;</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">monitorXHR</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">req</span>, <span class="pl-smi">flags</span>) {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> _open;</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> _open <span class="pl-k">=</span> <span class="pl-smi">req</span>.<span class="pl-smi">open</span>, <span class="pl-smi">req</span>.<span class="pl-en">open</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">type</span>, <span class="pl-smi">url</span>, <span class="pl-k">async</span>, <span class="pl-smi">user</span>, <span class="pl-smi">password</span>) {</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-en">cb</span>({</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">          type<span class="pl-k">:</span>type,</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">          url<span class="pl-k">:</span>url,</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">          async<span class="pl-k">:</span><span class="pl-k">async</span>,</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">          flags<span class="pl-k">:</span>flags,</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">          user<span class="pl-k">:</span>user,</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">          password<span class="pl-k">:</span>password,</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">          xhr<span class="pl-k">:</span>req</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">        }), <span class="pl-smi">_open</span>.<span class="pl-c1">apply</span>(req, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">    }, _XMLHttpRequest <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">XMLHttpRequest</span>, <span class="pl-c1">window</span>.<span class="pl-en">XMLHttpRequest</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">flags</span>) {</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> _overrideMimeType, _setRequestHeader, req;</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> req <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">_XMLHttpRequest</span>(flags), <span class="pl-en">monitorXHR</span>(req, flags), _setRequestHeader <span class="pl-k">=</span> <span class="pl-smi">req</span>.<span class="pl-smi">setRequestHeader</span>, </td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">req</span>.<span class="pl-c1">headers</span> <span class="pl-k">=</span> {}, <span class="pl-smi">req</span>.<span class="pl-en">setRequestHeader</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">value</span>) {</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">req</span>.<span class="pl-c1">headers</span>[name] <span class="pl-k">=</span> value, <span class="pl-smi">_setRequestHeader</span>.<span class="pl-c1">call</span>(req, name, value);</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">      }, _overrideMimeType <span class="pl-k">=</span> <span class="pl-smi">req</span>.<span class="pl-smi">overrideMimeType</span>, <span class="pl-smi">req</span>.<span class="pl-en">overrideMimeType</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">type</span>) {</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">req</span>.<span class="pl-smi">mimeType</span> <span class="pl-k">=</span> type, <span class="pl-smi">_overrideMimeType</span>.<span class="pl-c1">call</span>(req, type);</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">      }, req;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-en">extendNative</span>(<span class="pl-c1">window</span>.<span class="pl-smi">XMLHttpRequest</span>, _XMLHttpRequest), <span class="pl-c1">null</span> <span class="pl-k">!=</span> <span class="pl-c1">window</span>.<span class="pl-smi">XDomainRequest</span> <span class="pl-k">?</span> (_XDomainRequest <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">XDomainRequest</span>, </td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">window</span>.<span class="pl-en">XDomainRequest</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> req;</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> req <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">_XDomainRequest</span>(), <span class="pl-en">monitorXHR</span>(req), req;</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-en">extendNative</span>(<span class="pl-c1">window</span>.<span class="pl-smi">XDomainRequest</span>, _XDomainRequest)) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">init</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>interceptRequests<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">Offline</span>.<span class="pl-en">onXHR</span>(<span class="pl-k">function</span>(<span class="pl-smi">arg</span>) {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> xhr;</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> xhr <span class="pl-k">=</span> <span class="pl-smi">arg</span>.<span class="pl-smi">xhr</span>, <span class="pl-smi">xhr</span>.<span class="pl-smi">offline</span> <span class="pl-k">!==</span> <span class="pl-k">!</span><span class="pl-c1">1</span> <span class="pl-k">?</span> <span class="pl-en">checkXHR</span>(xhr, <span class="pl-smi">Offline</span>.<span class="pl-smi">markUp</span>, <span class="pl-smi">Offline</span>.<span class="pl-smi">confirmDown</span>) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>checkOnLoad<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> <span class="pl-smi">Offline</span>.<span class="pl-en">check</span>() <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-c1">setTimeout</span>(init, <span class="pl-c1">0</span>), <span class="pl-c1">window</span>.<span class="pl-smi">Offline</span> <span class="pl-k">=</span> Offline;</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">}).<span class="pl-c1">call</span>(<span class="pl-c1">this</span>), <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> down, next, nope, rc, reset, retryIntv, tick, tryNow, up;</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">Offline</span>) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Offline Reconnect brought in without offline.js<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">  rc <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">reconnect</span> <span class="pl-k">=</span> {}, retryIntv <span class="pl-k">=</span> <span class="pl-c1">null</span>, <span class="pl-en">reset</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> ref;</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">null</span> <span class="pl-k">!=</span> <span class="pl-smi">rc</span>.<span class="pl-smi">state</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>inactive<span class="pl-pds">&quot;</span></span> <span class="pl-k">!==</span> <span class="pl-smi">rc</span>.<span class="pl-smi">state</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect:stopped<span class="pl-pds">&quot;</span></span>), </td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">rc</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>inactive<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">rc</span>.<span class="pl-smi">remaining</span> <span class="pl-k">=</span> <span class="pl-smi">rc</span>.<span class="pl-smi">delay</span> <span class="pl-k">=</span> <span class="pl-c1">null</span> <span class="pl-k">!=</span> (ref <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect.initialDelay<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">?</span> ref <span class="pl-k">:</span><span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">next</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> delay, ref;</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> delay <span class="pl-k">=</span> <span class="pl-c1">null</span> <span class="pl-k">!=</span> (ref <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect.delay<span class="pl-pds">&quot;</span></span>)) <span class="pl-k">?</span> ref <span class="pl-k">:</span><span class="pl-c1">Math</span>.<span class="pl-c1">min</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">ceil</span>(<span class="pl-c1">1.5</span> <span class="pl-k">*</span> <span class="pl-smi">rc</span>.<span class="pl-smi">delay</span>), <span class="pl-c1">3600</span>), </td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">rc</span>.<span class="pl-smi">remaining</span> <span class="pl-k">=</span> <span class="pl-smi">rc</span>.<span class="pl-smi">delay</span> <span class="pl-k">=</span> delay;</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">tick</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>connecting<span class="pl-pds">&quot;</span></span> <span class="pl-k">!==</span> <span class="pl-smi">rc</span>.<span class="pl-smi">state</span> <span class="pl-k">?</span> (<span class="pl-smi">rc</span>.<span class="pl-smi">remaining</span> <span class="pl-k">-=</span> <span class="pl-c1">1</span>, <span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect:tick<span class="pl-pds">&quot;</span></span>), </td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">0</span> <span class="pl-k">===</span> <span class="pl-smi">rc</span>.<span class="pl-smi">remaining</span> <span class="pl-k">?</span> <span class="pl-en">tryNow</span>() <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">tryNow</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>waiting<span class="pl-pds">&quot;</span></span> <span class="pl-k">===</span> <span class="pl-smi">rc</span>.<span class="pl-smi">state</span> <span class="pl-k">?</span> (<span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect:connecting<span class="pl-pds">&quot;</span></span>), <span class="pl-smi">rc</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>connecting<span class="pl-pds">&quot;</span></span>, </td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">Offline</span>.<span class="pl-en">check</span>()) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">down</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> (<span class="pl-en">reset</span>(), <span class="pl-smi">rc</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>waiting<span class="pl-pds">&quot;</span></span>, <span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect:started<span class="pl-pds">&quot;</span></span>), </td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">    retryIntv <span class="pl-k">=</span> <span class="pl-c1">setInterval</span>(tick, <span class="pl-c1">1e3</span>)) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">up</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">null</span> <span class="pl-k">!=</span> retryIntv <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">clearInterval</span>(retryIntv), <span class="pl-en">reset</span>();</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">nope</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-s"><span class="pl-pds">&quot;</span>connecting<span class="pl-pds">&quot;</span></span> <span class="pl-k">===</span> <span class="pl-smi">rc</span>.<span class="pl-smi">state</span> <span class="pl-k">?</span> (<span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect:failure<span class="pl-pds">&quot;</span></span>), </td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">    <span class="pl-smi">rc</span>.<span class="pl-smi">state</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>waiting<span class="pl-pds">&quot;</span></span>, <span class="pl-en">next</span>()) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-smi">rc</span>.<span class="pl-smi">tryNow</span> <span class="pl-k">=</span> tryNow, <span class="pl-en">reset</span>(), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>down<span class="pl-pds">&quot;</span></span>, down), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>confirmed-down<span class="pl-pds">&quot;</span></span>, nope), </td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>up<span class="pl-pds">&quot;</span></span>, up);</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">}.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>), <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> clear, flush, held, holdRequest, makeRequest, waitingOnConfirm;</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">Offline</span>) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Requests module brought in without offline.js<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">  held <span class="pl-k">=</span> [], waitingOnConfirm <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>, <span class="pl-en">holdRequest</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">req</span>) {</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>requests<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!==</span> <span class="pl-k">!</span><span class="pl-c1">1</span> <span class="pl-k">?</span> (<span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>requests:capture<span class="pl-pds">&quot;</span></span>), </td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">    <span class="pl-s"><span class="pl-pds">&quot;</span>down<span class="pl-pds">&quot;</span></span> <span class="pl-k">!==</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">state</span> <span class="pl-k">&amp;&amp;</span> (waitingOnConfirm <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">0</span>), <span class="pl-smi">held</span>.<span class="pl-c1">push</span>(req)) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">makeRequest</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">arg</span>) {</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> body, name, password, ref, type, url, user, val, xhr;</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (xhr <span class="pl-k">=</span> <span class="pl-smi">arg</span>.<span class="pl-smi">xhr</span>, url <span class="pl-k">=</span> <span class="pl-smi">arg</span>.<span class="pl-smi">url</span>, type <span class="pl-k">=</span> <span class="pl-smi">arg</span>.<span class="pl-c1">type</span>, user <span class="pl-k">=</span> <span class="pl-smi">arg</span>.<span class="pl-smi">user</span>, password <span class="pl-k">=</span> <span class="pl-smi">arg</span>.<span class="pl-smi">password</span>, </td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">    body <span class="pl-k">=</span> <span class="pl-smi">arg</span>.<span class="pl-c1">body</span>, <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>requests<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!==</span> <span class="pl-k">!</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">xhr</span>.<span class="pl-c1">abort</span>(), <span class="pl-smi">xhr</span>.<span class="pl-c1">open</span>(type, url, <span class="pl-k">!</span><span class="pl-c1">0</span>, user, password), ref <span class="pl-k">=</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">headers</span>;</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (name <span class="pl-k">in</span> ref) val <span class="pl-k">=</span> ref[name], <span class="pl-smi">xhr</span>.<span class="pl-c1">setRequestHeader</span>(name, val);</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">xhr</span>.<span class="pl-smi">mimeType</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">xhr</span>.<span class="pl-en">overrideMimeType</span>(<span class="pl-smi">xhr</span>.<span class="pl-smi">mimeType</span>), <span class="pl-smi">xhr</span>.<span class="pl-c1">send</span>(body);</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">clear</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> held <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">flush</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> body, i, key, len, request, requests, url;</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>requests<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!==</span> <span class="pl-k">!</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (<span class="pl-smi">Offline</span>.<span class="pl-en">trigger</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>requests:flush<span class="pl-pds">&quot;</span></span>), requests <span class="pl-k">=</span> {}, i <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-smi">held</span>.<span class="pl-c1">length</span>; len <span class="pl-k">&gt;</span> i; i<span class="pl-k">++</span>) request <span class="pl-k">=</span> held[i], </td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">      url <span class="pl-k">=</span> <span class="pl-smi">request</span>.<span class="pl-smi">url</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span>(<span class="pl-cce">\?</span><span class="pl-k">|</span>&amp;)_=<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span><span class="pl-pds">/</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">match</span>, <span class="pl-smi">chr</span>) {</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>?<span class="pl-pds">&quot;</span></span> <span class="pl-k">===</span> chr <span class="pl-k">?</span> chr <span class="pl-k">:</span><span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">      }), <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>deDupBody<span class="pl-pds">&quot;</span></span>) <span class="pl-k">?</span> (body <span class="pl-k">=</span> <span class="pl-smi">request</span>.<span class="pl-c1">body</span>, body <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>[object Object]<span class="pl-pds">&quot;</span></span> <span class="pl-k">===</span> <span class="pl-smi">body</span>.<span class="pl-c1">toString</span>() <span class="pl-k">?</span> <span class="pl-c1">JSON</span>.<span class="pl-en">stringify</span>(body) <span class="pl-k">:</span><span class="pl-smi">body</span>.<span class="pl-c1">toString</span>(), </td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">      requests[<span class="pl-smi">request</span>.<span class="pl-c1">type</span>.<span class="pl-c1">toUpperCase</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> - <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> url <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> - <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> body] <span class="pl-k">=</span> request) <span class="pl-k">:</span>requests[<span class="pl-smi">request</span>.<span class="pl-c1">type</span>.<span class="pl-c1">toUpperCase</span>() <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> - <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> url] <span class="pl-k">=</span> request;</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">for</span> (key <span class="pl-k">in</span> requests) request <span class="pl-k">=</span> requests[key], <span class="pl-en">makeRequest</span>(request);</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">clear</span>();</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>requests<span class="pl-pds">&quot;</span></span>) <span class="pl-k">!==</span> <span class="pl-k">!</span><span class="pl-c1">1</span> <span class="pl-k">?</span> (<span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>confirmed-up<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> waitingOnConfirm <span class="pl-k">?</span> (waitingOnConfirm <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>, <span class="pl-en">clear</span>()) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>up<span class="pl-pds">&quot;</span></span>, flush), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>down<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> waitingOnConfirm <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-smi">Offline</span>.<span class="pl-en">onXHR</span>(<span class="pl-k">function</span>(<span class="pl-smi">request</span>) {</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> _onreadystatechange, _send, <span class="pl-k">async</span>, hold, xhr;</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> xhr <span class="pl-k">=</span> <span class="pl-smi">request</span>.<span class="pl-smi">xhr</span>, <span class="pl-k">async</span> <span class="pl-k">=</span> <span class="pl-smi">request</span>.<span class="pl-smi">async</span>, <span class="pl-smi">xhr</span>.<span class="pl-smi">offline</span> <span class="pl-k">!==</span> <span class="pl-k">!</span><span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-en">hold</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-en">holdRequest</span>(request);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">      }, _send <span class="pl-k">=</span> <span class="pl-smi">xhr</span>.<span class="pl-smi">send</span>, <span class="pl-smi">xhr</span>.<span class="pl-en">send</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">body</span>) {</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-smi">request</span>.<span class="pl-c1">body</span> <span class="pl-k">=</span> body, <span class="pl-smi">_send</span>.<span class="pl-c1">apply</span>(xhr, <span class="pl-c1">arguments</span>);</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">      }, <span class="pl-k">async</span>) <span class="pl-k">?</span> <span class="pl-c1">null</span> <span class="pl-k">===</span> <span class="pl-smi">xhr</span>.<span class="pl-smi">onprogress</span> <span class="pl-k">?</span> (<span class="pl-smi">xhr</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>, hold, <span class="pl-k">!</span><span class="pl-c1">1</span>), </td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">xhr</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>timeout<span class="pl-pds">&quot;</span></span>, hold, <span class="pl-k">!</span><span class="pl-c1">1</span>)) <span class="pl-k">:</span>(_onreadystatechange <span class="pl-k">=</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">onreadystatechange</span>, </td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">xhr</span>.<span class="pl-en">onreadystatechange</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">0</span> <span class="pl-k">===</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">readyState</span> <span class="pl-k">?</span> <span class="pl-en">hold</span>() <span class="pl-k">:</span><span class="pl-c1">4</span> <span class="pl-k">===</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">readyState</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">0</span> <span class="pl-k">===</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">status</span> <span class="pl-k">||</span> <span class="pl-smi">xhr</span>.<span class="pl-c1">status</span> <span class="pl-k">&gt;=</span> <span class="pl-c1">12e3</span>) <span class="pl-k">&amp;&amp;</span> <span class="pl-en">hold</span>(), </td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> _onreadystatechange <span class="pl-k">?</span> <span class="pl-smi">_onreadystatechange</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, <span class="pl-c1">arguments</span>) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">      }) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-smi">Offline</span>.<span class="pl-smi">requests</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">      flush<span class="pl-k">:</span>flush,</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">      clear<span class="pl-k">:</span>clear</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">    }) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">}.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>), <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> base, e, i, len, ref, simulate, state;</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span>Offline) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Offline simulate brought in without offline.js<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">for</span> (ref <span class="pl-k">=</span> [ <span class="pl-s"><span class="pl-pds">&quot;</span>up<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>down<span class="pl-pds">&quot;</span></span> ], i <span class="pl-k">=</span> <span class="pl-c1">0</span>, len <span class="pl-k">=</span> <span class="pl-smi">ref</span>.<span class="pl-c1">length</span>; len <span class="pl-k">&gt;</span> i; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">    state <span class="pl-k">=</span> ref[i];</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">      simulate <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">querySelector</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>script[data-simulate=&#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> state <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>&#39;]<span class="pl-pds">&quot;</span></span>) <span class="pl-k">||</span> (<span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span> <span class="pl-k">!=</span> <span class="pl-k">typeof</span> localStorage <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">null</span> <span class="pl-k">!==</span> localStorage <span class="pl-k">?</span> <span class="pl-smi">localStorage</span>.<span class="pl-c1">OFFLINE_SIMULATE</span> <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>) <span class="pl-k">===</span> state;</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">catch</span> (_error) {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">      e <span class="pl-k">=</span> _error, simulate <span class="pl-k">=</span> <span class="pl-k">!</span><span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">  simulate <span class="pl-k">&amp;&amp;</span> (<span class="pl-c1">null</span> <span class="pl-k">==</span> <span class="pl-smi">Offline</span>.<span class="pl-c1">options</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">Offline</span>.<span class="pl-c1">options</span> <span class="pl-k">=</span> {}), <span class="pl-c1">null</span> <span class="pl-k">==</span> (base <span class="pl-k">=</span> <span class="pl-smi">Offline</span>.<span class="pl-c1">options</span>).<span class="pl-smi">checks</span> <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">base</span>.<span class="pl-smi">checks</span> <span class="pl-k">=</span> {}), </td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">Offline</span>.<span class="pl-c1">options</span>.<span class="pl-smi">checks</span>.<span class="pl-smi">active</span> <span class="pl-k">=</span> state);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">}.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>), <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">RETRY_TEMPLATE</span>, <span class="pl-c1">TEMPLATE</span>, _onreadystatechange, addClass, content, createFromHTML, el, flashClass, flashTimeouts, init, removeClass, render, roundTime;</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">window</span>.<span class="pl-smi">Offline</span>) <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Offline UI brought in without offline.js<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">TEMPLATE</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;offline-ui&quot;&gt;&lt;div class=&quot;offline-ui-content&quot;&gt;&lt;/div&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>, </td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">RETRY_TEMPLATE</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;a href class=&quot;offline-ui-retry&quot;&gt;&lt;/a&gt;<span class="pl-pds">&#39;</span></span>, <span class="pl-en">createFromHTML</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">html</span>) {</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> el;</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> el <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createElement</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>div<span class="pl-pds">&quot;</span></span>), <span class="pl-smi">el</span>.<span class="pl-smi">innerHTML</span> <span class="pl-k">=</span> html, <span class="pl-smi">el</span>.<span class="pl-smi">children</span>[<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">  }, el <span class="pl-k">=</span> content <span class="pl-k">=</span> <span class="pl-c1">null</span>, <span class="pl-en">addClass</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">removeClass</span>(name), <span class="pl-smi">el</span>.<span class="pl-c1">className</span> <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> name;</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">removeClass</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>) {</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-smi">el</span>.<span class="pl-c1">className</span> <span class="pl-k">=</span> <span class="pl-smi">el</span>.<span class="pl-c1">className</span>.<span class="pl-c1">replace</span>(<span class="pl-k">new</span> <span class="pl-en">RegExp</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>(^| )<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">name</span>.<span class="pl-c1">split</span>(<span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>).<span class="pl-c1">join</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>|<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span>( |$)<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span>gi<span class="pl-pds">&quot;</span></span>), <span class="pl-s"><span class="pl-pds">&quot;</span> <span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">  }, flashTimeouts <span class="pl-k">=</span> {}, <span class="pl-en">flashClass</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">name</span>, <span class="pl-smi">time</span>) {</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">addClass</span>(name), <span class="pl-c1">null</span> <span class="pl-k">!=</span> flashTimeouts[name] <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">clearTimeout</span>(flashTimeouts[name]), </td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">    flashTimeouts[name] <span class="pl-k">=</span> <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">removeClass</span>(name), <span class="pl-k">delete</span> flashTimeouts[name];</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-c1">1e3</span> <span class="pl-k">*</span> time);</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">roundTime</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">sec</span>) {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> mult, unit, units, val;</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">    units <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">      day<span class="pl-k">:</span><span class="pl-c1">86400</span>,</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">      hour<span class="pl-k">:</span><span class="pl-c1">3600</span>,</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">      minute<span class="pl-k">:</span><span class="pl-c1">60</span>,</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">      second<span class="pl-k">:</span><span class="pl-c1">1</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">for</span> (unit <span class="pl-k">in</span> units) <span class="pl-k">if</span> (mult <span class="pl-k">=</span> units[unit], sec <span class="pl-k">&gt;=</span> mult) <span class="pl-k">return</span> val <span class="pl-k">=</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(sec <span class="pl-k">/</span> mult), </td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">    [ val, unit ];</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> [ <span class="pl-s"><span class="pl-pds">&quot;</span>now<span class="pl-pds">&quot;</span></span>, <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span> ];</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">render</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> button, handler;</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> el <span class="pl-k">=</span> <span class="pl-en">createFromHTML</span>(<span class="pl-c1">TEMPLATE</span>), <span class="pl-c1">document</span>.<span class="pl-c1">body</span>.<span class="pl-c1">appendChild</span>(el), <span class="pl-c1">null</span> <span class="pl-k">!=</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">reconnect</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">Offline</span>.<span class="pl-en">getOption</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect<span class="pl-pds">&quot;</span></span>) <span class="pl-k">&amp;&amp;</span> (<span class="pl-smi">el</span>.<span class="pl-c1">appendChild</span>(<span class="pl-en">createFromHTML</span>(<span class="pl-c1">RETRY_TEMPLATE</span>)), </td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">    button <span class="pl-k">=</span> <span class="pl-smi">el</span>.<span class="pl-c1">querySelector</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.offline-ui-retry<span class="pl-pds">&quot;</span></span>), <span class="pl-en">handler</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-smi">e</span>.<span class="pl-c1">preventDefault</span>(), <span class="pl-smi">Offline</span>.<span class="pl-smi">reconnect</span>.<span class="pl-en">tryNow</span>();</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">    }, <span class="pl-c1">null</span> <span class="pl-k">!=</span> <span class="pl-smi">button</span>.<span class="pl-smi">addEventListener</span> <span class="pl-k">?</span> <span class="pl-smi">button</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span>, handler, <span class="pl-k">!</span><span class="pl-c1">1</span>) <span class="pl-k">:</span><span class="pl-smi">button</span>.<span class="pl-c1">attachEvent</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>click<span class="pl-pds">&quot;</span></span>, handler)), </td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> <span class="pl-smi">Offline</span>.<span class="pl-smi">state</span>), content <span class="pl-k">=</span> <span class="pl-smi">el</span>.<span class="pl-c1">querySelector</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>.offline-ui-content<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-en">init</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-en">render</span>(), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>up<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-down<span class="pl-pds">&quot;</span></span>), <span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-up<span class="pl-pds">&quot;</span></span>), <span class="pl-en">flashClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-up-2s<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">2</span>), </td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">flashClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-up-5s<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>down<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-up<span class="pl-pds">&quot;</span></span>), <span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-down<span class="pl-pds">&quot;</span></span>), <span class="pl-en">flashClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-down-2s<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">2</span>), </td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">      <span class="pl-en">flashClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-down-5s<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect:connecting<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-connecting<span class="pl-pds">&quot;</span></span>), <span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-waiting<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect:tick<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> ref, time, unit;</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-waiting<span class="pl-pds">&quot;</span></span>), <span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-connecting<span class="pl-pds">&quot;</span></span>), ref <span class="pl-k">=</span> <span class="pl-en">roundTime</span>(<span class="pl-smi">Offline</span>.<span class="pl-smi">reconnect</span>.<span class="pl-smi">remaining</span>), </td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">      time <span class="pl-k">=</span> ref[<span class="pl-c1">0</span>], unit <span class="pl-k">=</span> ref[<span class="pl-c1">1</span>], <span class="pl-smi">content</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-retry-in-value<span class="pl-pds">&quot;</span></span>, time), </td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">content</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-retry-in-unit<span class="pl-pds">&quot;</span></span>, unit);</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect:stopped<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-connecting offline-ui-waiting<span class="pl-pds">&quot;</span></span>), <span class="pl-smi">content</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-retry-in-value<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">null</span>), </td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">      <span class="pl-smi">content</span>.<span class="pl-c1">setAttribute</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>data-retry-in-unit<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect:failure<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">flashClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-reconnect-failed-2s<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">2</span>), <span class="pl-en">flashClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-reconnect-failed-5s<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">    }), <span class="pl-smi">Offline</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>reconnect:success<span class="pl-pds">&quot;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">return</span> <span class="pl-en">flashClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-reconnect-succeeded-2s<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">2</span>), <span class="pl-en">flashClass</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>offline-ui-reconnect-succeeded-5s<span class="pl-pds">&quot;</span></span>, <span class="pl-c1">5</span>);</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">    });</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">  }, <span class="pl-s"><span class="pl-pds">&quot;</span>complete<span class="pl-pds">&quot;</span></span> <span class="pl-k">===</span> <span class="pl-c1">document</span>.<span class="pl-c1">readyState</span> <span class="pl-k">?</span> <span class="pl-en">init</span>() <span class="pl-k">:</span><span class="pl-c1">null</span> <span class="pl-k">!=</span> <span class="pl-c1">document</span>.<span class="pl-smi">addEventListener</span> <span class="pl-k">?</span> <span class="pl-c1">document</span>.<span class="pl-c1">addEventListener</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>DOMContentLoaded<span class="pl-pds">&quot;</span></span>, init, <span class="pl-k">!</span><span class="pl-c1">1</span>) <span class="pl-k">:</span>(_onreadystatechange <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">onreadystatechange</span>, </td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">  <span class="pl-c1">document</span>.<span class="pl-en">onreadystatechange</span> <span class="pl-k">=</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">&quot;</span>complete<span class="pl-pds">&quot;</span></span> <span class="pl-k">===</span> <span class="pl-c1">document</span>.<span class="pl-c1">readyState</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">init</span>(), <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span> <span class="pl-k">==</span> <span class="pl-k">typeof</span> _onreadystatechange <span class="pl-k">?</span> <span class="pl-smi">_onreadystatechange</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, <span class="pl-c1">arguments</span>) <span class="pl-k">:</span><span class="pl-k">void</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">}.<span class="pl-c1">call</span>(<span class="pl-c1">this</span>);</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>




    </div>
  </div>

  </div>

      <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.16070s from github-fe138-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  

  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha256-ikMY/+oJoM24IUt2zykmufagztMYoxe+1BnbGSFMaQ0=" src="https://assets-cdn.github.com/assets/compat-8a4318ffea09a0cdb8214b76cf2926b9f6a0ced318a317bed419db19214c690d.js"></script>
    <script crossorigin="anonymous" integrity="sha256-bRCeda2EcbpBUIJybADDX7kpzquXUIJJKDXxHsqMB9k=" src="https://assets-cdn.github.com/assets/frameworks-6d109e75ad8471ba415082726c00c35fb929ceab975082492835f11eca8c07d9.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-JiDIsEmU1dbRJxibf8h4aUpt6hLCwxb+4W7ndRV+vEA=" src="https://assets-cdn.github.com/assets/github-2620c8b04994d5d6d127189b7fc878694a6dea12c2c316fee16ee775157ebc40.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

