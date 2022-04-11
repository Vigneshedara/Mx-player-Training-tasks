package com.vighnuorg.mxplayer;

import androidx.appcompat.app.AppCompatActivity;

import android.media.MediaPlayer;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class ContactUS extends AppCompatActivity {
    Button b1, b2;
    MediaPlayer mp1, mp2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_contact_us);
        b1 = (Button) findViewById(R.id.button1);
        b2 = (Button) findViewById(R.id.button2);

         mp1 = new MediaPlayer().create(ContactUS.this, R.raw.bheemsong);
         mp2 = new MediaPlayer().create(ContactUS.this, R.raw.naatu);

        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(b1.isPressed()){
                    mp2.stop();
                    mp1.start();
                }
                else{
                    mp1.start();
                }
            }
        });
        b2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if(b2.isPressed()){
                    mp1.stop();
                    mp2.start();
                }
                else{
                    mp2.start();
                }
            }
        });
    }
    @Override
    public void onBackPressed(){
        super.onBackPressed();
        mp1.stop();
        mp2.stop();
    }

}