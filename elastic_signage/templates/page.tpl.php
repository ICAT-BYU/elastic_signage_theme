	<div id="main">
		<div id="header">

            <div id="drupal-rendered-header" style="display:none;">
                <!--
                <?php if ($page['header']): ?>    
                   <?php print render($page['header']); ?>
                <?php endif; ?>
                -->
            </div>
                
            <div id="title">
                <div id="title-content">

                    <?php if ($page['title']): ?>    
                       <?php print render($page['title']); ?>
                    <?php endif; ?>            

                </div>
            </div>
            <div id="datetime">
                <div id="datetime-content">

                    <?php if ($page['datetime']): ?>    
                       <?php print render($page['datetime']); ?>
                    <?php endif; ?>            

                </div>
            </div>
		</div>

		<div id="content">
			<div id="slide">
                <div id="slide-content">

                    <?php if ($page['slide']): ?>    
                       <?php print render($page['slide']); ?>
                    <?php endif; ?>            

                </div>
            </div>
			<div id="weather">
                <div id="weather-content">

                    <?php if ($page['weather']): ?>    
                       <?php print render($page['weather']); ?>
                    <?php endif; ?>            

                </div>
            </div>
			<div id="events">
                <div id="events-content">

                    <?php if ($page['events']): ?>    
                       <?php print render($page['events']); ?>
                    <?php endif; ?>            

                </div>
            </div>
			<div id="slide2">
                <div id="slide-content">

                    <?php if ($page['slide2']): ?>    
                       <?php print render($page['slide2']); ?>
                    <?php endif; ?>            

                </div>
            </div>
            
            <div id="drupal-rendered-content" style="display:none;">
                <!--
                <?php if ($page['content']): ?>
                    <?php print render($page['content']); ?>
                <?php endif; ?>
                -->
            </div>
            
		</div>
		

		<div id="footer">
 
            <div id="headline">
                <div id="headline-content">

                    <?php if ($page['headline']): ?>    
                       <?php print render($page['headline']); ?>
                    <?php endif; ?>            

                </div>
            </div>

            <div id="drupal-rendered-footer" style="display:none;">
                <!--
                <?php if ($page['footer']): ?>    
                   <?php print render($page['footer']); ?>
                <?php endif; ?>
                -->
            </div>
            
		</div>
	<div>
