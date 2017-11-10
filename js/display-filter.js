var DisplayFilter = function(){
    
    var self = this;
    
    this.filter = function(val){
        if(val == '*'){
            $('[data-filter-item]').fadeIn(300);
        }else{
            self.hide(val);
            
            setTimeout(function(){
                self.show(val);
            },400);
        }
    }
    
    this.show = function(val){
        $('[data-filter-item]').each(function(index){
            var filterVal = $(this).attr('data-filter-item').split(' ');
            for(var i=0; i<filterVal.length; i++){
                if(filterVal[i] == val){
                    $(this).fadeIn(300);
                }
            }
        });
    }
    
    this.hide = function(val){
        $('[data-filter-item]').each(function(index){
            var filterVal = $(this).attr('data-filter-item').split(' ');
            for(var i=0; i<filterVal.length; i++){
                if(filterVal[i] != val){
                    $(this).fadeOut(300);
                }
            }
        });
    }
    
}