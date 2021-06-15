package com.example.tictactoe;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import android.widget.ImageView;
import android.widget.TextView;
import androidx.gridlayout.widget.GridLayout;



public class MainActivity extends AppCompatActivity {

    int[] pos={2,2,2,2,2,2,2,2,2};
    int[][] win={{0,1,2},{3,4,5},{6,7,8},{0,3,6},{1,4,7},{2,5,8},{0,4,8},{2,4,6}};
    int a=0;
    boolean Game=true;
    String winner = "";
    int hie=0;int jes=0;
    TextView textView2;String Score;
    public void Jessie (View view){
        a=1;
        Button Jessie= findViewById(R.id.button2);
        Jessie.setVisibility(View.INVISIBLE);

    }
    public void Heisenberg (View view){
        a=0;
        Button Heisenberg= findViewById(R.id.button);
        Heisenberg.setVisibility(View.INVISIBLE);
    }





    public void click(View view){

        ImageView iv=(ImageView) view;
        int tpos=Integer.parseInt(iv.getTag().toString());
        if(pos[tpos]==2 && Game) {
            pos[tpos] = a;
            Log.i("Tag", iv.getTag().toString());
            if (a == 0) {
                iv.setImageResource(R.drawable.finw);
                a = 1;
            } else {
                iv.setImageResource(R.drawable.finj);
                a = 0;
            }
            iv.animate().alpha(1).setDuration(500);
            for (int[] w : win) {
                if (pos[w[0]] == pos[w[1]] && pos[w[1]] == pos[w[2]] && pos[w[0]] != 2) {
                    Game = false;

                    if (a == 0) {
                        winner = "Winner is Jessie";
                        finish(winner);
                        jes+=1;
                    } else if (a == 1) {
                        winner = "Winner is Heisenberg";
                        finish(winner);
                        hie+=1;
                    }
                }
                else if(draw()) {
                    winner = "Draw";
                    finish(winner);
                }
                 Score="Jessie- "+jes+" Hiesenberg-"+hie;
                }
            }
        textView2=findViewById(R.id.textView2);
        textView2.setText(Score);
        }




    public void PlayAgain (View view) {
        TextView Score = findViewById(R.id.Score);
        TextView Jessie=findViewById(R.id.button2);
        Jessie.setVisibility(View.VISIBLE);
        Button Heisenberg= findViewById(R.id.button);
        Heisenberg.setVisibility(View.VISIBLE);
        Button PlayAgain= findViewById(R.id.PlayAgain);
        PlayAgain.setVisibility(View.INVISIBLE);
        Score.setVisibility(View.INVISIBLE);
        GridLayout gridLayout= findViewById(R.id.gridLayout);
        for(int i=0;i<gridLayout.getChildCount();i++){
            ImageView imageView=(ImageView) gridLayout.getChildAt(i);
            imageView.animate().alpha(0).setDuration(500);
            imageView.setImageDrawable(null);
        }
        for(int i=0;i<pos.length;i++)
        {
            pos[i]=2;
        }
        Game=true;
        a=0;
    }

    public void finish(String winner){
        TextView Score = findViewById(R.id.Score);
        Button PlayAgain= findViewById(R.id.PlayAgain);
        PlayAgain.setVisibility(View.VISIBLE);
        Score.setVisibility(View.VISIBLE);
        Score.setText(winner);



    }

    public boolean draw() {
        for(int i=0;i<pos.length;i++){
            if(pos[i]==2)
            {
                return false;
            }
        }
        return true;
    }


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}